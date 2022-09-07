import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Task from '../components/Task/Task';
import { getTasks, postTask } from '../services/api';
import { URL_TRASH } from '../constants/index';
import { useAuth } from '../contexts/auth'
import { ITask } from '../types';

const Home: React.FC = () => {
  const { writtenTask, setWrittenTask } = useAuth();
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async () => {
    const getTask = await getTasks();
    return setTasks(getTask);
  };
  
  const handlePostTask = async (states: ITask) => {
    await postTask(states);
    await handleGetTasks();
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return(
    <div>
      <Header
        change={ setWrittenTask }
        click={ handlePostTask }
        task={ writtenTask }
      />
      { tasks.map(({ task, status }, index) => (
        <Task
          key={index}
          task={ task }
          status={ status }
          Url={ URL_TRASH }
          id={index} />
      )) }
    </div>
  );
};

export default Home;