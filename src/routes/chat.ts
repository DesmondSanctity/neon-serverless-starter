import { Hono } from 'hono'
import * as chatController from '../controllers/chat'

const chatRoutes = new Hono()

chatRoutes.post('/', chatController.createChat)
chatRoutes.get('/', chatController.getAllChats)
chatRoutes.get('/:id', chatController.getChatById)
chatRoutes.put('/:id', chatController.updateChat)
chatRoutes.delete('/:id', chatController.deleteChat)

export { chatRoutes }