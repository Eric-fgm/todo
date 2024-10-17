export type List = {
  id: number;
  name: string;
  modifiedAt: Date;
  createdAt: Date;
};

export type CreateList = { name: string };

export type UpdateList = CreateList;
