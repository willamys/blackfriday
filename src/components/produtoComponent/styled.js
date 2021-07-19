import styled from 'styled-components';

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 20px;
max-width: 500px;
height: 400px;
background-color: #fff;
padding: 0px 40px;
@media(max-width: 900px) {
  width: 100 %;
  height: 100 %;
  margin-bottom:20px;
}
`;

export const TitleCard = styled.h1`
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #000;
width: 100 %;
font-size: 18pt;
`;

export const TitlePrice = styled.h1`
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #000;
width: 100%;
font-size: 14pt;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #000;
  height: 2rem;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: .25rem;
  background: #000;
  color: #fff;
  font-weight: bold;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;
