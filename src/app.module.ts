import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
