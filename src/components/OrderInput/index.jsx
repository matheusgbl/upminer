import '../../styles/orderInput.scss';

import React from 'react';

const OrderInput = ({ release, price }) => {
  return (
    <div className="main-page__input">
      <label htmlFor="order-input">ORDENAR</label>
      <select name="order-input" id="order-input">
        <option value={release}>Lançamento</option>
        <option value={price}>Preço</option>
      </select>
    </div>
  );
};

export default OrderInput;
