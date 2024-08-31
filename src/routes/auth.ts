import { Hono } from 'hono'
import * as authController from '../controllers/auth'

const authRoutes = new Hono()

authRoutes.post('/signup', authController.signup)
authRoutes.post('/login', authController.login)

export { authRoutes }