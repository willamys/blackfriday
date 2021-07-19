import React from 'react';
import * as S from './styled';
import logo from './../../assets/logo.png';

function ProdutoComponent(props) {

  return (
    <>
      <S.Card>
        <img src={logo} alt="Produto" width="200px" />
        <S.TitleCard>{props.title}</S.TitleCard>
        <S.TitlePrice>R${props.preco}</S.TitlePrice>
        <S.Button>Avise-me</S.Button>
      </S.Card>
    </>
  );

}

export default ProdutoComponent;