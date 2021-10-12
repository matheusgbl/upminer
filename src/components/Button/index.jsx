import '../../styles/button.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ price, text, id }) => {
  return (
    <div className="button-component">
      <p data-testid={`button-component-coin-${id}`}>R$</p>
      <span data-testid={`button-component-price-${id}`}>{price}</span>
      <Link to={`/product-detail/${id}`} data-testid={`button-component-link-${id}`}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
