import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
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

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Task | null> {
    return this.taskService.getOne(id);
  }

  @Post()
  createOne(@Body() inbound: CreateTaskDto): Promise<Task> {
    // console.log(inbound);
    return this.taskService.createOne(inbound);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<Task | null> {
    return this.taskService.deleteOne(id);
  }
}
