import React from 'react';
import { ContainerTask,
  Button, TaskP, SelectStatus, Img, DivTask, DivSelectTask, LabelHeader } from './styles';
import { Props } from '../../types/index';

const Task: React.FC<Props> = ({ id, task, status, Url, btnDelete }: Props) => {
  console.log(id, "id no component Task");
  
  return (
    <ContainerTask>
      <DivTask>
        <TaskP>{task}</TaskP>
      </DivTask>
      <DivSelectTask>
      <LabelHeader>
        <SelectStatus
          name='status'
          defaultValue={status}
        >
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
        </SelectStatus>
      </LabelHeader>
      <Button value={ id } onClick={ (id) => btnDelete(id) }>
        <Img src={Url} alt={Url} />
      </Button>
      </DivSelectTask>
    </ContainerTask>
  )
}

export default Task;