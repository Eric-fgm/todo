export type Task = {
  id: number;
  title: string;
  description: string;
  status: 'done' | 'to-do';
  modifiedAt: Date;
  createdAt: Date;
};

export type CreateTask = {
  title: string;
  description: string;
  status?: Task['status'];
};

export type UpdateTask = Partial<CreateTask>;
