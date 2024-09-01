import { Context } from 'hono';
import { zValidator } from '@hono/zod-validator'
import userQueries from '../queries/user';
import { userUpdateSchema } from '../validations';
import { logger } from '../middlewares/logger';

export const getAllUsers = async (c: Context) => {
 const { page = 1, perPage = 10, sortBy, sortOrder, filter, filterFields } = c.req.query();

 logger('Fetching all users', { page, perPage, sortBy, sortOrder, filter, filterFields });

 try {
  const users = await userQueries.getAll({
   page: Number(page),
   perPage: Number(perPage),
   sortBy: sortBy as string,
   sortOrder: sortOrder as 'asc' | 'desc',
   filter: filter as string,
   filterFields: filterFields ? (filterFields as string).split(',') : undefined,
  });
  logger('Successfully fetched users', { count: users.data.length });
  return c.json({ data: users }, 200);
 } catch (error) {
  logger('Error fetching users', { error });
  return c.json({ error: 'Error fetching users' }, 500);
 }
};

export const getUserById = async (c: Context) => {
 const { id } = c.req.param();

 logger('Fetching user by ID', { userId: id });

 try {
  const user = await userQueries.getId(id);
  if (user) {
   logger('Successfully fetched user', { userId: id });
   return c.json({ data: user }, 204);
  } else {
   logger('User not found', { userId: id });
   return c.json({ error: 'User not found' }, 404);
  }
 } catch (error) {
  logger('Error fetching user', { userId: id, error });
  return c.json({ error: 'Error fetching user' }, 500);
 }
};

export const updateUser = async (c: Context) => {
 zValidator('json', userUpdateSchema, (result, c) => {
  if (!result.success) {
   return c.text('Invalid request!', 400)
  }
 })

 const { id } = c.req.param();
 const userData = c.req.json();

 logger('Updating user', { userId: id, userData });

 try {
  const updatedUser = await userQueries.updateId(id, userData);
  logger('Successfully updated user', { userId: id });
  return c.json({ data: updatedUser }, 204);
 } catch (error) {
  logger('Error updating user', { userId: id, error });
  return c.json({ error: 'Error updating user' }, 500);
 }
};

export const deleteUser = async (c: Context) => {
 const { id } = c.req.param();

 logger('Deleting user', { userId: id });

 try {
  await userQueries.deleteId(id);
  logger('Successfully deleted user', { id });
  return c.json({ message: 'Successfully deleted user' }, 204)
 } catch (error) {
  logger('Error deleting user', { userId: id, error });
  return c.json({ error: 'Error deleting user' }, 500);
 }
};
