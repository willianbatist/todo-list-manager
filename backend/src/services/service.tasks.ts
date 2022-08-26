import { Optional } from 'sequelize/types';
import Tasks from '../database/models/tasks';

export const getTasks = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
}

export const createTask = async (body: Optional<any, string> | undefined) => {
  const task = await Tasks.create(body);
  return task;
};
