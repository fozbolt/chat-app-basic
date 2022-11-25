import {
  Controller,
  Get,
  Body,
  Patch,
  Post,
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
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Post()
  createChannel(@Body() createChannelDto: CreateChannelDto) {
    return this.channelsService.createChannel(createChannelDto);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.channelsService.createUser(createUserDto);
  }

  @Get()
  findAllChannels() {
    return this.channelsService.findAllChannels();
  }

  @Post(':id')
  createMessage(@Param('id') @Body() createMessageDto: CreateMessageDto) {
    return this.channelsService.createMessage(createMessageDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.channelsService.findOne(+id);
  }
}
