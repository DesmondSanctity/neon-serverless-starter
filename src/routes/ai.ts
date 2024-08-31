import { Hono } from 'hono'
import * as aiController from '../controllers/ai'

const aiRoutes = new Hono()

aiRoutes.post('/generate', aiController.generateResponse)

export { aiRoutes }