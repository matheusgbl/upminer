/* eslint-disable jsx-a11y/no-onchange */
import '../../styles/orderInput.scss';

import React from 'react';

const OrderInput = ({ value, onChangeValue }) => {
  return (
    <div className="main-page__content__input">
      <label htmlFor="order-input">
        ORDENAR
        <select
          name="order-input"
          id="order-input"
          value={value}
          onChange={(e) => onChangeValue(e.target.value)}>
          <option value="lancamento">Lançamento</option>
          <option value="preco">Preço</option>
        </select>
      </label>
    </div>
  );
};

export default OrderInput;
