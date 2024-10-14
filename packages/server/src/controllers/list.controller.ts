import type { Request, Response } from 'express';
import type { CreateList, UpdateList } from 'shared/types';
import getListRepository from '../repositories/list.repository';

const getAll = async (_: Request, res: Response) => {
  const listRepository = getListRepository();

  const allLists = await listRepository.find();

  res.json({ data: allLists });
};

const create = async (
  req: Request<unknown, unknown, CreateList>,
  res: Response,
) => {
  const { name } = req.body;

  const listRepository = getListRepository();

  const listDraft = listRepository.create({ name });
  const createdList = await listRepository.save(listDraft);

  res.json({ data: createdList });
};

const update = async (
  req: Request<{ id: number }, unknown, UpdateList>,
  res: Response,
) => {
  const { id } = req.params;
  const { name } = req.body;

  const listRepository = getListRepository();

  const foundList = await listRepository.findOneBy({ id });
  if (!foundList) {
    res.status(404).json({ error: { message: 'Not Found' } });
    return;
  }

  await listRepository.update(id, {
    name,
    modifiedAt: new Date(),
  });

  res.sendStatus(204);
};

const remove = async (req: Request<{ id: number }>, res: Response) => {
  const { id } = req.params;

  const listRepository = getListRepository();

  const foundList = await listRepository.findOneBy({ id });
  if (!foundList) {
    res.status(404).json({ error: { message: 'Not Found' } });
    return;
  }

  await listRepository.remove(foundList);

  res.sendStatus(204);
};

export default { getAll, create, update, remove };
