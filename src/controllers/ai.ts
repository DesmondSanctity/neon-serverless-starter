import { Context } from 'hono'
import { logger } from '../middlewares/logger';

export async function generateResponse(c: Context) {
 logger('Generating AI response', { method: 'generateResponse' })

 const { prompt } = await c.req.json()
 logger('Received prompt', { prompt })

 const messages = [
  { role: "system", content: "You are a friendly assistant" },
  { role: "user", content: prompt },
 ];

 const response = await c.env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages });
 logger('AI response generated', { responseLength: response.length })

 return c.json({ response })
}

