import { z } from 'zod';

export const validateCreateList = z.object({
  name: z.string().min(1),
});

export const validateUpdateList = validateCreateList;

export const validateCreateTask = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
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
