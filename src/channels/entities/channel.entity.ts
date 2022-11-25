import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Message } from './message.entity';
import { User } from './user.entity';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdBy: string;

  @OneToMany(() => Message, (message) => message.channel)
  @JoinColumn()
  messages: Message[];

  @ManyToMany(() => User, (user) => user.channels)
  @JoinTable()
  users: User[];
}
