import db from '../services/db.service';
import Task from '../entities/task.entity';

export default () => db.getRepository(Task);
