import React from 'react';
import Header from '../components/Header/Header';
import Task from '../components/Task/Task';

const Home: React.FC = () => {
  return(
    <div>
      <Header/>
      <Task/>
    </div>
  );
};

export default Home;