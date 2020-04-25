import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_MODEL')
    private taskModel: Model<Task>,
  ) {}

  async create(createTask: { name: string }): Promise<Task> {
    const createdTask = new this.taskModel(createTask);
    return await createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }
}
