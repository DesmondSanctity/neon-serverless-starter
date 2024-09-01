import { Context, Next } from 'hono'
import { verify } from 'hono/jwt'

export function jwtAuth() {
 return async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
   return c.json({ error: 'Missing or invalid Authorization header' }, 401)
  }

  const token = authHeader.split(' ')[1]

  try {
   const decodedPayload = await verify(token, c.env.JWT_SECRET)

   // Check if token has expired
   const currentTime = Math.floor(Date.now() / 1000)
   if (decodedPayload.exp && decodedPayload.exp < currentTime) {
    return c.json({ error: 'Token has expired' }, 401)
   }

   // Add decoded payload to context for use in subsequent middleware or handlers
   c.set('jwtPayload', decodedPayload)

   // Continue to the next middleware or route handler
   await next()
  } catch (error) {
   return c.json({ error: 'Invalid token' }, 401)
  }
 }
}

