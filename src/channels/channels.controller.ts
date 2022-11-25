import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('channels')
export class UsersController {
  

  
}
