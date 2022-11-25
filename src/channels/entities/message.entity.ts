import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Channel } from './channel.entity';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  message: string;

  @ManyToOne(() => Channel, (channel) => channel.messages, {
    onDelete: 'CASCADE',
  })
  channel: Channel;
}
