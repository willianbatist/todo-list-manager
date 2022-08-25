import Tasks from '../database/models/tasks';

export const getTasks = async () => {
  const tasks = await Tasks.findAll();
  return tasks;
}

export const g = {};
