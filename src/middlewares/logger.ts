import { Context, Next } from 'hono'

export function logger(message: string, ...rest: any[]) {
 return async (c: Context, next: Next) => {
  const { method, url } = c.req;
  const logMessage = `[${method}] ${url} - ${message}`;
  console.log(logMessage, ...rest);

  await next();
 }
}