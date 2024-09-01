import { z } from '@hono/zod-openapi';

const ParamsSchema = z.object({
 id: z
  .string()
  .min(3)
  .openapi({
   param: {
    name: 'id',
    in: 'path',
   },
   example: '1212121',
  }),
});

const UserSchema = z
 .object({
  id: z.string().openapi({
   example: '123',
  }),
  email: z.string().openapi({
   example: 'johndoe@email.com',
  }),
  Chat: z.array(z.string()).openapi({
   example: ['123', '456'],
  }),
 })
 .openapi('User');

const SignupSchema = z
 .object({
  email: z.string().openapi({
   example: 'John Doe',
  }),
  password: z.number().openapi({
   example: 42,
  }),
 })
 .openapi('CreateUser');

const LoginSchema = z
 .object({
  email: z.string().openapi({
   example: 'John Doe',
  }),
  password: z
   .string()
   .openapi({
    example: 'password',
   })
   .min(8)
   .max(20),
 })
 .openapi('Login');

const ChatSchema = z
 .object({
  id: z.string().openapi({
   example: '123',
  }),
  userId: z.string().openapi({
   example: '1234',
  }),
  message: z.string().openapi({
   example: 'Hello World, what is today?',
  }),
 })
 .openapi('Chat');

const CreateChatSchema = z
 .object({
  userId: z.string().openapi({
   example: '1234',
  }),
  message: z.string().openapi({
   example: 'Hello World, what is today?',
  }),
 })
 .openapi('CreateChat');

 const ErrorSchema = z.object({
  code: z.number().openapi({
   example: 400,
  }),
  message: z.string().openapi({
   example: 'Bad Request',
  }),
 })
 .openapi('Error');


export { ParamsSchema, UserSchema, LoginSchema, SignupSchema, ChatSchema, CreateChatSchema, ErrorSchema };
