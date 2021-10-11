import '../../styles/button.scss';

import React from 'react';

const Button = ({ price, text, id }) => {
  return (
    <div className="main-page__button">
      <p data-testid={`header-coin-${id}`}>R$</p>
      <span data-testid={`header-price-${id}`}>{price}</span>
      <button type="button" data-testid={`header-btn-${id}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
