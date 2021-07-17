import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  background: #ccc;
  width:100vw;
  height:100vh;
  display: flex;
  align-itens: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: .25rem;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  border: 1px solid #000;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: .25rem;
  background: #000;
  color: #fff;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;