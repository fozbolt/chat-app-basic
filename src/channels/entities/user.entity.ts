import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Channel } from './channel.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToMany(() => Channel, (channel) => channel.users)
  channels: Channel[];
}
