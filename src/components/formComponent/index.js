import React from 'react';
import * as S from './styled';

function FormComponent() {
  return (
    <>
      <S.Container>
        <S.Input type="text" name="name" id="name" placeholder="Seu Nome" />
        <S.Input type="email" name="email" id="email" placeholder="Seu E-mail" />
        <S.Button>Cadastrar</S.Button>
      </S.Container>
    </>
  );
}

export default FormComponent;