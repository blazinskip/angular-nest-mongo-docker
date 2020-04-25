import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @Post()
  async createTask(@Body() task: { name: string }): Promise<Task> {
    return this.taskService.create(task);
  }


  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
}
