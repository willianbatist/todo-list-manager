import { Optional } from 'sequelize/types';
import Tasks from '../database/models/tasks';
import { ITask } from '../interfaces/ITask';

export const getTasks = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
}

export const createTask = async (body: Optional<any, string> | undefined): Promise<ITask> => {
  const task = await Tasks.create(body);
  return task;
};

export const updateTask = async (id: number, body: ITask) => {
  const { task, status } = body;
  const update = await Tasks.update({ task, status }, { where: { id } });
  return update;
}
