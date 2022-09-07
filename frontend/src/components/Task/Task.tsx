import React from 'react';
import { ContainerTask, Button, TaskP, SelectStatus, Img } from './styles';
import { Props } from '../../types/index';

const Task: React.FC<Props> = ({ task, status, Url }: Props) => {

  return (
    <ContainerTask>
      <div className='ContainerTask'>
        <TaskP>{task}</TaskP>
      </div>
      <div className='ContainerSelect'>
      <label className="label-header">
        <SelectStatus
          name='status'
          defaultValue={status}
        >
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
        </SelectStatus>
      </label>
      <Button>
        <Img src={Url} alt={Url} />
      </Button>
      </div>
    </ContainerTask>
  )
}

export default Task;