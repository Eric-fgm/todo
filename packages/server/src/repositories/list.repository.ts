import db from '../services/db.service';
import List from '../entities/list.entity';

export default () => db.getRepository(List);
