import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Message } from './entities/message.entity';
import { User } from './entities/user.entity';
import { Channel } from './entities/channel.entity';

@Injectable()
export class ChannelsService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Channel) private channelsRepository: Repository<Channel>,
    @InjectRepository(Message) private messagesRepository: Repository<Message>,
  ) {}

  createChannel(createChannelDto: CreateChannelDto) {
    const newChannel = this.channelsRepository.create(createChannelDto);

    return this.channelsRepository.save(newChannel);
  }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(newUser);
  }

  createMessage(createMessageDto: CreateMessageDto) {
    const newMessage = this.messagesRepository.create(createMessageDto);

    return this.messagesRepository.save(newMessage);
  }

  findAllChannels() {
    return this.channelsRepository.find();
    // return this.channelsRepository.find({ relations: ['users'] });
  }

  findOne(id: number) {
    const channel = this.channelsRepository.findOneBy({ id });

    if (channel) return 'list of channels';
  }
}
