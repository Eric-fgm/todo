import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import List from './list.entity';

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: () => 'current_timestamp' })
  modifiedAt: Date;

  @Column({ default: () => 'current_timestamp' })
  createdAt: Date;

  @ManyToOne(() => List, (list) => list.tasks)
  list: List;
}

export default Task;
