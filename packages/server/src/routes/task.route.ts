import express from 'express';
import {
  validateListId,
  validateTaskId,
  validateCreateTask,
  validateUpdateTask,
} from 'shared/utils';
import taskController from '../controllers/task.controller';
import { validateRequest } from '../middlewares/validator.middleware';

const router = express.Router();

router.get(
  '/:listId/tasks',
  validateRequest({ params: validateListId }),
  taskController.getByList,
);

router.post(
  '/:listId/tasks',
  validateRequest({ params: validateListId, body: validateCreateTask }),
  taskController.create,
);

router.put(
  '/:listId/tasks/:taskId',
  validateRequest({ params: validateTaskId, body: validateUpdateTask }),
  taskController.update,
);

router.delete(
  '/:listId/tasks/:taskId',
  validateRequest({ params: validateTaskId }),
  taskController.remove,
);

export default router;
