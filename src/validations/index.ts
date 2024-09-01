import { z } from 'zod';

const userSchema = z.object({
 email: z.string(),
 phone: z.string(),
 password: z.string(),
});

const userLoginSchema = z.object({
 email: z.string(),
 password: z.string(),
});

const userUpdateSchema = z.object({
 email: z.string(),
 phone: z.number(),
});

const changePasswordSchema = z.object({
 password: z.string(),
});

const chatSchema = z.object({
 message: z.string(),
 userId: z.string(),
});

const chatUpdateSchema = z.object({
 message: z.string(),
 userId: z.string(),
});

export {
 userSchema,
 userLoginSchema,
 userUpdateSchema,
 changePasswordSchema,
 chatSchema,
 chatUpdateSchema
};
