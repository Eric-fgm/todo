import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import db from './services/db.service';
import listRoutes from './routes/list.route';
import taskRoutes from './routes/task.route';

export default async ({ port }: { port: number }) => {
  await db.initialize();

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(async (req, res, next) => {
    await new Promise((r) => setTimeout(r, 500));
    next();
  });

  app.use('/lists', listRoutes);
  app.use('/lists', taskRoutes);

  app.listen(port, () => console.log(`Listening on port: ${port}`));
};
