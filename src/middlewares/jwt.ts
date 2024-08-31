import { Context, Next } from 'hono'
import { jwt } from 'hono/jwt'

export function jwtAuth() {
 return async (c: Context, next: Next) => {
  const jwtMiddleware = jwt({
   secret: c.env.JWT_SECRET,
  })
  return jwtMiddleware(c, next)
 }
}
