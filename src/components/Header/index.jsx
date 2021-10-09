import './header.scss';

import React from 'react';

import logo from '../../assets/upminer_logo.png';

export const Header = () => {
  return (
    <>
      <header className="up-header">
        <div className="up-header__content">
          <div className="up-header__content__logo">
            <img src={logo} alt="up miner logo" />
            <h1>| Histórico Empresarial</h1>
          </div>
          <div className="up-header__content__info">
            <p>
              O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os
              fatos e acontecimentos relevantes de uma empresa desde o seu ano de
              fundação.
            </p>
          </div>
          <div className="up-header__content__price">
            <p>R$</p>
            <span>40,00</span>
            <button type="button">Saiba mais</button>
          </div>
        </div>
      </header>
      <div className="up-header__line" />
    </>
  );
};
