import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TaskController {
  private static tasks = [{ id: 1, name: 'this is first task' }];

  constructor() {
  }

  @Post()
  createTask(@Body() task: { name: string }) {
    const newTask = { id: TaskController.tasks.length + 1, ...task };

    TaskController.tasks = [...TaskController.tasks, newTask];

    return newTask;
  }


  @Get()
  findAll(): any[] {
    return TaskController.tasks;
  }
}
