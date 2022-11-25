import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { ChannelsModule } from './channels/channels.module';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'preskok1',
  password: 'preskok',
  database: 'chat_app_filip',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(config), ChannelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
