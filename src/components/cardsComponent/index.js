import React from 'react';
import * as S from './styled';
import git from './../../assets/git.png';
import linkedIn from './../../assets/linkedIn.png';
import ProdutoComponent from '../produtoComponent';

function CardsComponent() {

  return (
    <>
      <S.Produtos>
        <S.Title>NOSSOS LIVROS EM DESTAQUE</S.Title>
        <S.ListaProdutos>
          <ProdutoComponent title="Doces Zero Lactose" preco="19.90" />
          <ProdutoComponent title="Massas Zero Glúten" preco="23.90" />
          <ProdutoComponent title="Bolos de festa Zero" preco="18.90" />
        </S.ListaProdutos>
      </S.Produtos>
    </>
  );

}

export default CardsComponent;