import { Context } from 'hono'
import { sign } from 'hono/jwt'
import bcrypt from 'bcryptjs'
import userQueries from '../queries/user';
import { prisma } from '../configs/db'
import { logger } from '../middlewares/logger'

export async function signup(c: Context) {
 try {
  const { email, password } = await c.req.json()

  const existingUser = await userQueries.getId(email);
  if (existingUser) {
   logger('Signup attempt with existing email', { email, userId: existingUser.id })
   return c.json({ error: 'Email already in use' }, 400)
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
   data: { email, password: hashedPassword }
  })

  logger('User signed up successfully', { userId: user.id })
  return c.json({ message: 'Signup successful' }, 201)
 } catch (error) {
  logger('Error during signup', { error })
  return c.json({ error: 'Internal server error' }, 500)
 }
}

export async function login(c: Context) {
 try {
  const { email, password } = await c.req.json()

  const user = await userQueries.getId(email);
  if (!user) {
   logger('Login attempt with non-existent email', { email })
   return c.json({ error: 'Invalid credentials' }, 401)
  }

  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) {
   logger('Login attempt with invalid password', { userId: user.id })
   return c.json({ error: 'Invalid credentials' }, 401)
  }

  const token = await sign({ userId: user.id }, c.env.JWT_SECRET)

  logger('User logged in successfully', { userId: user.id })
  return c.json({ token })
 } catch (error) {
  logger('Error during login', { error })
  return c.json({ error: 'Internal server error' }, 500)
 }
}
