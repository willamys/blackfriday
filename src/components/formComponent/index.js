import React, { useState } from 'react';
import * as S from './styled';

function FormComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sendMail, setSendMail] = useState(false);
  const [nameButton, setNameButton] = useState('Cadastrar');

  function handlePesquisa(e) {
    e.preventDefault();
    const users = [];
    const user = {
      name_user: name,
      email_user: email
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    setTimeout(() => {
      setSendMail(true);
    }, 3000);
    setNameButton('...AGUARDE');
  }

  return (
    <>
      <S.Container>
        <S.Card>
          {sendMail ?
            <S.Title>Email enviado com sucesso!</S.Title>
            :
            <>
              <form onSubmit={handlePesquisa}>
                <S.Title>
                  Deixe seu email e fique por dentro de nossos<br />
                  lançamentos de livros nessa temática.</S.Title>
                <S.Input type="text" name="name" id="name" value={name}
                  placeholder="Seu Nome" onChange={e => setName(e.target.value)} required />
                <S.Input type="email" name="email" id="email" value={email}
                  placeholder="Seu E-mail" onChange={e => setEmail(e.target.value)} required />
                <S.Button type="submit">{nameButton}</S.Button>
              </form>
            </>
          }
        </S.Card>
      </S.Container>
    </>
  );
}

export default FormComponent;