import axios from 'axios';

const GET_TASKS = 'http://localhost:3001/tasks';

interface ITask {
  id: number,
  task: string,
  status: string,
}

export const getTasks = async () => {
  return axios.get(GET_TASKS).then((res) => {
    return res.data; 
  });
}
