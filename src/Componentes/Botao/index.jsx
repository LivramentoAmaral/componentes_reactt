import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ( ) => {
  return <ButtonWrapper > clique aqui...</ButtonWrapper>;
};

export default Button;
