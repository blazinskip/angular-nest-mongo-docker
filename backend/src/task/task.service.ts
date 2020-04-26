import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(
    @Inject('TASK_MODEL')
    private taskModel: Model<Task>,
  ) {}

  async create(createTask: { name: string }): Promise<Task> {
    const createdTask = new this.taskModel(createTask);
    this.logger.log(`Created task with name <${createdTask.name}>`)
    return await createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }
}
