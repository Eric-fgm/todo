import express from 'express';
import {
  validateId,
  validateCreateList,
  validateUpdateList,
} from 'shared/utils';
import listController from '../controllers/list.controller';
import { validateRequest } from '../middlewares/validator.middleware';

const router = express.Router();

router.get('/', listController.getAll);

router.post(
  '/',
  validateRequest({ body: validateCreateList }),
  listController.create,
);

router.put(
  '/:id',
  validateRequest({ params: validateId, body: validateUpdateList }),
  listController.update,
);

router.delete(
  '/:id',
  validateRequest({ params: validateId }),
  listController.remove,
);

export default router;
