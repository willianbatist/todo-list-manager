import React from 'react';
import { ContainerTask, Button } from './styles';

interface Props {
  id: number,
  task: string,
  status: string,
}

const Task: React.FC<Props> = ({ task, status }: Props) => {
  return(
    <ContainerTask>
      <p>{ task }</p>
      <p>{ status }</p>
        <i className="far fa-trash-alt"></i>
    </ContainerTask>
  )
}

export default Task;