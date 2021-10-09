import React from 'react';

const BannerPrice = ({ coin, price, btnText }) => {
  return (
    <div className="up-header__content__banner__price">
      <p>{coin}</p>
      <span>{price}</span>
      <button type="button">{btnText}</button>
    </div>
  );
};

export default BannerPrice;
