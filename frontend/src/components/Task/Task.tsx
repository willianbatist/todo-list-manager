import React from 'react';
import { ContainerTask, Button } from './styles';

interface Props {
  id: number,
  task: string,
  status: string,
  Url: string,
}

const Task: React.FC<Props> = ({ task, status, Url }: Props) => {
  return(
    <ContainerTask>
      <p>{ task }</p>
      <p>{ status }</p>
      <Button>
        <img src={ Url } alt={ Url } />
      </Button>
    </ContainerTask>
  )
}

export default Task;