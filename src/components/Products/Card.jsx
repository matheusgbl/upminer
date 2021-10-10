import '../../styles/products.scss';

import React from 'react';

const Card = ({ icon, productName, productDescription, price }) => {
  return (
    <div className="main-page__product-card">
      <div className="main-page__product-card__info">
        {icon}
        <h3>{productName}</h3>
        <p>{productDescription}</p>
      </div>
      <div className="main-page__product-card__info__button">
        <p>R$ {price}</p>
        <p>Saiba mais</p>
      </div>
    </div>
  );
};

export default Card;
