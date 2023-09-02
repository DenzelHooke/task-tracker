import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task-dto';
import { Task } from './interfaces/tasks.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getAll(): Promise<Task[] | null> {
    return this.taskService.getAll();
  }

  @Post()
  createOne(@Body() inbound: CreateTaskDto): string {
    return this.taskService.createOne(inbound);
  }
}
