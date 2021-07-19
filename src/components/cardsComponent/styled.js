import styled from 'styled-components';

export const Produtos = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity:0.9;
  background-color: #000;
`;

export const ListaProdutos = styled.div`
width: 100%;
font-size: 35pt;
text-align: center;
padding: 20px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-around;
@media(max-width: 900px) {
  flex-direction: column;
}
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 20px;
max-width: 500px;
height: 300px;
background-color: #fff;
@media(max-width: 900px) {
}
`;

export const Title = styled.h1`
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #fff;
width: 100 %;
font-size: 25pt;
`;

export const TitleCard = styled.h1`
text-align: center;
font-weight: bold;
font-family: sans - serif;
color: #000;
width: 100 %;
font-size: 14pt;
`;