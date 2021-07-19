import React from 'react';
import * as S from './styled';
import FormComponent from './../formComponent';

function HeaderComponent() {
  return (
    <S.Header>
      <S.DivTitle>
        <S.Title>Deseja ter uma vida saudável, mas não sabe como?</S.Title>
        <S.SubTitle>Quer aprender a fazer receitas e adquirir qualidade de vida?</S.SubTitle>
      </S.DivTitle>
      <FormComponent />
    </S.Header>
  );
}

export default HeaderComponent;