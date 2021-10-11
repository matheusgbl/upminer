import React from 'react';

const BannerPrice = ({ price, id }) => {
  return (
    <div className="main-page__header__content__banner__price">
      <p data-testid={`header-coin-${id}`}>R$</p>
      <span data-testid={`header-price-${id}`}>{price}</span>
      <button type="button" data-testid={`header-btn-${id}`}>
        Saiba mais
      </button>
    </div>
  );
};

export default BannerPrice;
