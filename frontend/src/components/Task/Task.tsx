import React from 'react';
import { ContainerTask, Button } from './styles';

interface Props {
  id: number,
  task: string,
  status: string,
  Url: string,
}

const Task: React.FC<Props> = ({ task, status, Url }: Props) => {
  return (
    <ContainerTask>
      <p>{task}</p>
      <p>{status}</p>
      <label className="label-header">
        <select
          className="select-header"
          name='status'
          defaultValue={ status }
        >
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
        </select>
      </label>
      <Button>
        <img src={Url} alt={Url} />
      </Button>
    </ContainerTask>
  )
}

export default Task;