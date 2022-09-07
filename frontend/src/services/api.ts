import axios from 'axios';
import { GET_TASKS, POST_TASKS } from '../constants/index';

export const getTasks = () => {
  return axios.get(GET_TASKS).then((res) => res.data);
};

export const postTask = async (states: any) => {
  return axios.post(POST_TASKS, {
    task: states.task,
    status: 'Pendente',
  }).then((res) => res);
};
