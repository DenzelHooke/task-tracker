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

  async getOne(id: string): Promise<Task | null> {
    return await this.TaskModel.findById({ _id: id });
  }

  async createOne(task: Task): Promise<Task> {
    console.log(task);
    const newTask = new this.TaskModel(task);
    console.log(newTask);
    return await newTask.save();

    // return `TASK DATA: ${task}`;
  }

  async deleteOne(id: string): Promise<Task | null> {
    const deleted = this.TaskModel.findByIdAndDelete({ _id: id });

    return await deleted;
  }
}
