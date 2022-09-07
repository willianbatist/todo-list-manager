import axios from 'axios';
import { GET_TASKS, POST_TASKS } from '../constants/index';
import { ITask } from '../types';

export const getTasks = async () => {
  return axios.get(GET_TASKS).then((res) => res.data);
};

export const postTask = async (states: ITask) => {
  return axios.post(POST_TASKS, {
    task: states.task,
    status: 'Pendente',
  }).then((res) => res);
};
