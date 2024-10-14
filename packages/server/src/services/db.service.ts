import { DataSource } from 'typeorm';
import options from '../configs/db.config';

const db = new DataSource(options);

export default db;
