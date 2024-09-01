import { Context } from 'hono';
import { zValidator } from '@hono/zod-validator';
import chatQueries from '../queries/chat';
import { chatSchema, chatUpdateSchema } from '../validations';
import { logger } from '../middlewares/logger';

export const createChat = async (c: Context) => {
 zValidator('json', chatSchema, (result, c) => {
  if (!result.success) {
   return c.text('Invalid request!', 400)
  }
 })

 const { message, userId } = await c.req.json();
 logger('Creating chat', { message, userId });
 try {
  const createdChat = await chatQueries.create(message, userId);
  logger('Successfully created chat', { chatId: createdChat.id });
  return c.json({ data: createdChat }, 201);
 } catch (error) {
  logger('Error creating chat', { error });
  return c.json({ error: 'Error creating chat' }, 500);
 }
}

export const getAllChats = async (c: Context) => {
 const { page = 1, perPage = 10, sortBy, sortOrder, filter, filterFields } = c.req.query();

 logger('Fetching all chats', { page, perPage, sortBy, sortOrder, filter, filterFields });

 try {
  const chats = await chatQueries.getAll({
   page: Number(page),
   perPage: Number(perPage),
   sortBy: sortBy as string,
   sortOrder: sortOrder as 'asc' | 'desc',
   filter: filter as string,
   filterFields: filterFields ? (filterFields as string).split(',') : undefined,
  });
  logger('Successfully fetched chats', { count: chats.data.length });
  return c.json({ data: chats }, 200);
 } catch (error) {
  logger('Error fetching chats', { error });
  return c.json({ error: 'Error fetching chats' }, 500);
 }
};

export const getChatById = async (c: Context) => {
 const { id } = c.req.param();

 logger('Fetching chat by ID', { chatId: id });

 try {
  const chat = await chatQueries.getId(id);
  if (chat) {
   logger('Successfully fetched chat', { chatId: id });
   return c.json({ data: chat }, 204);
  } else {
   logger('Chat not found', { chatId: id });
   return c.json({ error: 'Chat not found' }, 404);
  }
 } catch (error) {
  logger('Error fetching chat', { chatId: id, error });
  return c.json({ error: 'Error fetching chat' }, 500);
 }
};

export const updateChat = async (c: Context) => {
 zValidator('json', chatUpdateSchema, (result, c) => {
  if (!result.success) {
   return c.text('Invalid request!', 400)
  }
 })

 const { id } = c.req.param();
 const chatData = c.req.json();

 logger('Updating chat', { chatId: id, chatData });

 try {
  const updatedChat = await chatQueries.updateId(id, chatData);
  logger('Successfully updated chat', { chatId: id });
  return c.json({ data: updatedChat }, 204);
 } catch (error) {
  logger('Error updating chat', { chatId: id, error });
  return c.json({ error: 'Error updating chat' }, 500);
 }
};

export const deleteChat = async (c: Context) => {
 const { id } = c.req.param();

 logger('Deleting chat', { chatId: id });

 try {
  await chatQueries.deleteId(id);
  logger('Successfully deleted chat', { id });
  return c.json({ message: 'Successfully deleted chat' }, 204)
 } catch (error) {
  logger('Error deleting chat', { chatId: id, error });
  return c.json({ error: 'Error deleting chat' }, 500);
 }
};
