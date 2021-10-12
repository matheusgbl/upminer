import React, { useState } from 'react';

const CategoryCard = ({ name, value, icon, notFocusClass, focusClass, onSelectCard }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={!isFocused ? notFocusClass : focusClass}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
      data-testid={`category-card-btn-${value}`}
      onClick={() => onSelectCard(value)}>
      <input type="hidden" id={value} value={value} data-testid="category-card-input" />
      {icon}
      <p data-testid={`category-card-${value}`}>{name}</p>
    </div>
  );
};

export default CategoryCard;
