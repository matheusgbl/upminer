import '../../styles/button.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ price, text, id }) => {
  return (
    <div className="button-component">
      <p data-testid={`button-component-${id}`}>R$</p>
      <span data-testid={`button-component-${id}`}>{price}</span>
      <Link to={`/product-detail/${id}`} data-testid={`button-component-${id}`}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
