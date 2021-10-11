import '../../styles/button.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ price, text, id }) => {
  return (
    <div className="main-page__button">
      <p data-testid={`header-coin-${id}`}>R$</p>
      <span data-testid={`header-price-${id}`}>{price}</span>
      <Link to={`/product-detail/${id}`} data-testid={`header-btn-${id}`}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
