import { z } from 'zod';

export const validateCreateList = z.object({
  name: z
    .string()
    .min(1, { message: 'To pole musi zawierać co najmniej 1 znak' }),
});

export const validateUpdateList = validateCreateList;

export const validateCreateTask = z.object({
  title: z
    .string()
    .min(1, { message: 'To pole musi zawierać co najmniej 1 znak' }),
  description: z
    .string()
    .min(1, { message: 'To pole musi zawierać co najmniej 1 znak' }),
  status: z.enum(['done', 'to-do']).optional(),
});

export const validateUpdateTask = validateCreateTask.partial();

export const validateId = z.object({
  id: z.coerce.number(),
});

export const validateListId = z.object({
  listId: z.coerce.number(),
});

export const validateTaskId = z.object({
  taskId: z.coerce.number(),
});
