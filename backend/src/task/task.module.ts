import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { taskProvider } from './task.provider';
import { TaskService } from './task.service';
import { MongoModule } from '../mongo/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [TaskController],
  providers: [...taskProvider, TaskService]
})
export class TaskModule {}
