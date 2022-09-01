import React from 'react';
import { Container, Input, Button, Title } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <Title>TODO LIST</Title>
      <Input/>
      <Button>Adicionar</Button>
    </Container>
  );
};

export default Header;