import { Module } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { UsersController } from './channels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channel } from './entities/channel.entity';
import { User } from './entities/user.entity';
import { Message } from './entities/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Channel, User, Message])],
  controllers: [UsersController],
  providers: [ChannelsService],
})
export class ChannelsModule {}
