import { ITask, ITaskModel, ITaskService } from '../interfaces/ITask';

export default class TasksService implements ITaskService {
  constructor(private model: ITaskModel) {
    this.model = model;
  }

  async findAll(): Promise<ITask[] | null> {
    const tasks = await this.model.findAll();
    return tasks;
  }

  async create(body: ITask): Promise<ITask | null> {
    const task = await this.model.create(body);
    return task;
  }

  async update(id: string, body: ITask): Promise<unknown> {
    const task = await this.model.update(id, body);
    return task;
  }
  
  async delete(id: string): Promise<unknown> {
    const task = await this.model.delete(id);
    return task;
  }
};
