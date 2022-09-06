import React from 'react';
import { Container, Input, Button, Title } from './styles';

interface Props {
  change(value: string): any;
}

const Header: React.FC<Props> = ({ change }: Props) => {
  return(
    <Container>
      <Title>Task Manager</Title>
      <Input placeholder='Escreva sua tarefa' onChange={ (e) => change(e.target.value)}/>
      <Button>Adicionar</Button>
    </Container>
  );
};

export default Header;