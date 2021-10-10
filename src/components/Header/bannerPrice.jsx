import React from 'react';

const BannerPrice = ({ price }) => {
  return (
    <div className="main-page__header__content__banner__price">
      <p>R$</p>
      <span>{price}</span>
      <button type="button">Saiba mais</button>
    </div>
  );
};

export default BannerPrice;
