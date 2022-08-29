import Model from '../database/models/tasks';
import { ITask, ITaskModel } from '../interfaces/ITask';

export default class TasksRepository implements ITaskModel {
  constructor(private model = Model) {
    this.model = model;
  }

  async findAll(): Promise<ITask[] | null> {
    const tasks = await this.model.findAll();
    return tasks;
  }

  async create(body: ITask): Promise<ITask | null> {
    const task = await this.model.create({ task: body.task, status: body.status });
    return task;
  }
  // volta aqui para analisar o retorno dessa função!
  async update(id: string, body: ITask): Promise<unknown> {
    const task = await this.model.update({ task: body.task, status: body.status }, { where: { id } });
    return task;
  }
  // volta aqui para analisar o retorno dessa função!
  async delete(id: string): Promise<unknown> {
    const task = await this.model.destroy({ where: { id } });
    return task;
  }
};