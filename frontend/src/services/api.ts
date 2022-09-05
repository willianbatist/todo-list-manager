import axios from 'axios';
import { GET_TASKS } from '../constants/index';

export const getTasks = async () => {
  return axios.get(GET_TASKS).then((res) => {
    return res.data; 
  });
}
