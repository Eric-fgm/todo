import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import Task from './task.entity';

@Entity()
class List extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: () => 'current_timestamp' })
  modifiedAt: Date;

  @Column({ default: () => 'current_timestamp' })
  createdAt: Date;

  @OneToMany(() => Task, (task) => task.list)
  tasks: Task[];
}

export default List;
