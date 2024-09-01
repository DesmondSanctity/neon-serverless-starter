import { Context } from 'hono'
import { sign } from 'hono/jwt'
import { zValidator } from '@hono/zod-validator';
import bcrypt from 'bcryptjs'
import userQueries from '../queries/user';
import { userLoginSchema, userSchema } from '../validations';
import { logger } from '../middlewares/logger'

export async function signup(c: Context) {
 zValidator('json', userSchema, (result, c) => {
  if (!result.success) {
   return c.text('Invalid request!', 400)
  }
 })

 try {
  const { email, password } = await c.req.json()

  const existingUser = await userQueries.getId(email);
  if (existingUser) {
   logger('Signup attempt with existing email', { email, userId: existingUser.id })
   return c.json({ error: 'Email already in use' }, 400)
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await userQueries.create(email, hashedPassword);

  logger('User signed up successfully', { userId: user.id })
  return c.json({ message: 'Signup successful' }, 201)
 } catch (error) {
  logger('Error during signup', { error })
  return c.json({ error: 'Internal server error' }, 500)
 }
}

export async function login(c: Context) {
 zValidator('json', userLoginSchema, (result, c) => {
  if (!result.success) {
   return c.text('Invalid request!', 400)
  }
 })

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

  const token = await sign({
   userId: user.id,
   exp: Math.floor(Date.now() / 1000) + 60 * 5
  }, c.env.JWT_SECRET)

  logger('User logged in successfully', { userId: user.id })
  return c.json({ token })
 } catch (error) {
  logger('Error during login', { error })
  return c.json({ error: 'Internal server error' }, 500)
 }
}
