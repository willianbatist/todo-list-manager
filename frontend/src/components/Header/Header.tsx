import React from 'react';
import { Container, Input, Button, Title } from './styles';
import { PropsHeader } from '../../types';

const Header: React.FC<PropsHeader> = ({ change, click, task }: PropsHeader) => {
  return(
    <Container>
      <Title>Task Manager</Title>
      <Input placeholder='Escreva sua tarefa' onChange={ (e) => change(e.target.value)}/>
      <Button onClick={ () => click({task}) }>Adicionar</Button>
    </Container>
  );
};

export default Header;