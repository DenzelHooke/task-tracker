import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/tasks.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// {
//     title: "Quote 2x4",
//     description: 'Must quote this by friday for Lasey, 204-224-2552',
//     importance: 2,
// }

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly TaskModel: Model<Task>) {}

  hello(): string {
    return 'Hello There Mate';
  }

  async getAll(): Promise<Task[] | null> {
    return await this.TaskModel.find();
  }

  createOne(task: Task): string {
    // const newTask = new this.TaskModel(task);

    return `TASK DATA: ${task}`;
  }
}
