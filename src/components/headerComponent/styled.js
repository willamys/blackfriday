import styled from 'styled-components';
// import img from './../../assets/back_p.jpg'; background-image: url(${img});

export const Header = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  background-image: url('./../../assets/logo.png');

`
export const DivTitle = styled.div`
  width:50%;
  height:100vh;
  padding: 0px 40px;
  display:flex;
  flex-basis:50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
border-radius: 20px;
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #000;
font-size: 50pt;
background-color: #fff;
opacity:0.8;
`;

export const SubTitle = styled.h2`
border-radius: 20px;
text-align: center;
font-weight: bold;
font-family: sans-serif;
color: #000;
background-color: #990014;
font-size: 30pt;
`;

