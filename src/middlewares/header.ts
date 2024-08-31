import { Context, Next } from 'hono'

export function secureHeaders() {
 return async (c: Context, next: Next) => {
  c.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  c.header('X-XSS-Protection', '1; mode=block')
  c.header('X-Frame-Options', 'DENY')
  c.header('X-Content-Type-Options', 'nosniff')
  await next()
 }
}
