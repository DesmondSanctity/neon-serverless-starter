import { Hono } from 'hono'
import * as userController from '../controllers/user'

const userRoutes = new Hono()

userRoutes.get('/', userController.getAllUsers)
userRoutes.get('/:id', userController.getUserById)
userRoutes.put('/:id', userController.updateUser)
userRoutes.delete('/:id', userController.deleteUser)

export { userRoutes }