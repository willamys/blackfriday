import styled from 'styled-components';

export const Container = styled.div`
  width:50%;
  min-height:100vh;
  display:flex;
  flex-basis:50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Card = styled.div`
  display:flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  max-width:500px;
  height:300px;
  background-color: #fff;
  padding: 0px 30px 10px 30px;
  @media (max-width: 900px) {
    width:100%;
    height:100%;
  }
`;

export const Title = styled.h1`
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #000;
width:100%;
font-size: 16pt;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 3rem;
  padding: 0 0.5rem;
  border-radius: .25rem;
  width: 96%;
  margin-bottom:5px;
  font-size: 14pt;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  height: 3rem;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: .25rem;
  background: #000;
  color: #fff;
  font-weight: bold;
  font-size: 14pt;
  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;