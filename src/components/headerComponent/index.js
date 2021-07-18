import React from 'react';
import * as S from './styled';
import FormComponent from './../formComponent';

function HeaderComponent() {
  return (
    <S.Header>
      <S.DivTitle>
        <S.Title>Tem problemas com GLÚTEN? </S.Title>
        <S.SubTitle>Quer aprender a fazer receitas ZERO Glúten?</S.SubTitle>
      </S.DivTitle>
      <FormComponent />
    </S.Header>
  );
}

export default HeaderComponent;