import List from '../entities/list.entity';
import Task from '../entities/task.entity';

export default {
  type: 'sqlite' as const,
  database: '../../database.db',
  synchronize: true,
  entities: [List, Task],
};
