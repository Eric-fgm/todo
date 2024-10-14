export type CreateTask = {
  title: string;
  description: string;
};

export type UpdateTask = Partial<CreateTask>;
