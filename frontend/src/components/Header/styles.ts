import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  border-bottom: solid 1px black;
  padding: 1%;

  &:focus {
    .btn {
      border: none;
      border-style: none;
      text-decoration: none;
    }
  }
`;

export const Input = styled.input`
  border: none;
  border-style: none;
  margin-top: 2%;
  width: 400px;
  height: 30px;
  border-bottom: solid 1px black;
  font-size: 16px;

 

  @media (max-width: 470px) {
    width: 200px;
    height: 25px;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border-style: none;
  border-radius: none;
  border-radius: 0px 2px 2px 0px;
  height: 30px;
  width: 80px;

  @media (max-width: 470px) {
    height: 25px;
  }
`;

export const Title = styled.h1`
  margin-top: 2%;
`