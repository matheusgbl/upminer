/* eslint-disable jsx-a11y/no-onchange */
import '../../styles/categoryInput.scss';

import React from 'react';

const CategoryInput = ({ categories, onChangeValue }) => {
  return (
    <div className="main-page__content__input-category">
      <label htmlFor="category-input">
        FILTRAR
        <select
          name="category-input"
          id="category-input"
          onChange={(e) => onChangeValue(e.target.value)}>
          {categories.map((item) => (
            <option value={item.name} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CategoryInput;
