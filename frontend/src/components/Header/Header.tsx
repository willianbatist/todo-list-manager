import React from 'react';
import { Container, Input, Button, Title } from './styles';

interface Props {
  change(value: string): any;
  click(states: object): any;
  task: string;
}

const Header: React.FC<Props> = ({ change, click, task }: Props) => {
  return(
    <Container>
      <Title>Task Manager</Title>
      <Input placeholder='Escreva sua tarefa' onChange={ (e) => change(e.target.value)}/>
      <Button onClick={ () => click({task}) }>Adicionar</Button>
    </Container>
  );
};

export default Header;