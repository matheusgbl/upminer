import '../../styles/orderInput.scss';

import React from 'react';

const OrderInput = () => {
  return (
    <div className="main-page__input">
      <label htmlFor="order-input">ORDENAR</label>
      <select name="order-input" id="order-input">
        <option value="Lançamento">Lançamento</option>
        <option value="Preço">Preço</option>
      </select>
    </div>
  );
};

export default OrderInput;
