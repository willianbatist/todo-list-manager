import styled from 'styled-components';

export const ContainerTask = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 70px;
  margin-right: 70px;
  padding: 10px;
  border: solid 2px black;

  @media (max-width: 700px) {
    display: block;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export const TaskP = styled.p`
  font-size: 18px;
`;

export const SelectStatus = styled.select`
  text-decoration: none;
  border-style: none;
  background-color: white;
  border-bottom: solid 1px black;
  font-size: 18px;
  
  @media (max-width: 700px) {
    padding: 1%;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  border-style: none;
  background-color: white;
`;

export const Img = styled.img`
  margin: 0px;
  padding: 0px;
  margin-bottom: -7px;
  
  @media (max-width: 700px) {
    margin-left: 50%;
  }
`;