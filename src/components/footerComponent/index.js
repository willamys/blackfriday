import React from 'react';
import * as S from './styled';
import git from './../../assets/git.png';
import linkedIn from './../../assets/linkedIn.png';

function FooterComponent() {

  return (
    <>
      <S.SocialMedia>Acompanhe nossas redes<br />
        <a href="https://www.linkedin.com/in/willamys-ara%C3%BAjo-01bb14205/"><img src={linkedIn} alt="LinkedIn" width="60px" /></a>
        <a href="https://github.com/willamys/"><img src={git} alt="GitHub" width="60px" /></a><br />
      </S.SocialMedia>
      <S.devFrom>Desenvolvido por Willamys Araújo</S.devFrom>
    </>
  );

}

export default FooterComponent;