import React from 'react';
import { Container, Input, Button, Title } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <Title>TODO LIST</Title>
      <Input className='btn' placeholder='Escreva sua tarefa'/>
      <Button>Adicionar</Button>
    </Container>
  );
};

export default Header;