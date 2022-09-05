import axios from 'axios';
import { GET_TASKS } from '../consts/index';

export const getTasks = async () => {
  return axios.get(GET_TASKS).then((res) => {
    return res.data; 
  });
}
