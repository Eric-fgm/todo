import type { Request, Response } from 'express';
import type { CreateTask, UpdateTask } from 'shared/types';
import getListRepository from '../repositories/list.repository';
import getTaskRepository from '../repositories/task.repository';

const getByList = async (req: Request<{ listId: number }>, res: Response) => {
  const { listId } = req.params;

  const taskRepository = getTaskRepository();

  const allTasks = await taskRepository.find({
    relations: { list: true },
    where: { list: { id: listId } },
  });

  res.json({ data: allTasks });
};

const create = async (
  req: Request<{ listId: number }, unknown, CreateTask>,
  res: Response,
) => {
  const { listId } = req.params;
  const { title, description } = req.body;

  const listRepository = getListRepository();
  const taskRepository = getTaskRepository();

  const foundList = await listRepository.findOneBy({ id: listId });
  if (!foundList) {
    res.status(404).json({ error: { message: 'Not Found' } });
    return;
  }

  const taskDraft = taskRepository.create({
    title,
    description,
    list: foundList,
  });
  const createdTask = await taskRepository.save(taskDraft);

  res.json({ data: createdTask });
};

const update = async (
  req: Request<{ taskId: number }, unknown, UpdateTask>,
  res: Response,
) => {
  const { taskId } = req.params;
  const { title, description } = req.body;

  const taskRepository = getTaskRepository();

  const foundTask = await taskRepository.findOneBy({ id: taskId });
  if (!foundTask) {
    res.status(404).json({ error: { message: 'Not Found' } });
    return;
  }

  await taskRepository.update(taskId, {
    title,
    description,
    modifiedAt: new Date(),
  });

  res.sendStatus(204);
};

const remove = async (req: Request<{ taskId: number }>, res: Response) => {
  const { taskId } = req.params;

  const taskRepository = getTaskRepository();

  const foundTask = await taskRepository.findOne({
    relations: { list: true },
    where: { id: taskId },
  });
  if (!foundTask) {
    res.status(404).json({ error: { message: 'Not Found' } });
    return;
  }

  await taskRepository.remove(foundTask);

  res.sendStatus(204);
};

export default { getByList, create, update, remove };
