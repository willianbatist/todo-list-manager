export interface ITask {
  id?: number;
  task: string;
  status: string;
}

export interface ITaskModel {
  findAll(): Promise<ITask[] | null>;
  create(body: ITask): Promise<ITask | null>;
  update(id: string, body: ITask): Promise<unknown>;
  delete(id: string): Promise<unknown>;
}

export interface ITaskService {
  findAll(): Promise<ITask[] | null>;
  create(body: ITask): Promise<ITask | null>;
  update(id: string, body: ITask): Promise<unknown>;
  delete(id: string): Promise<unknown>;
}