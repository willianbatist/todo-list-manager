import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Task from '../components/Task/Task';
import { getTasks } from '../services/api';
import { URL_TRASH } from '../consts/index';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  const handleGetTasks = async () => {
    const getTask = await getTasks();
    return setTasks(getTask);
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return(
    <div>
      <Header/>
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