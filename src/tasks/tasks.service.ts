import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/tasks.interface';
// {
//     title: "Quote 2x4",
//     description: 'Must quote this by friday for Lasey, 204-224-2552',
//     importance: 2,
// }

@Injectable()
export class TasksService {
  hello(): string {
    return 'Hello There Mate';
  }

  async createOne(task: Task): Promise<Task> {
    // const newTask = new ItemModel()
  }
}
