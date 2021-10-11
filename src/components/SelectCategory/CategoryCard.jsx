import React, { useState } from 'react';

const CategoryCard = ({ name, value, icon, notFocusClass, focusClass, onSelectCard }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={!isFocused ? notFocusClass : focusClass}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={-1}
      onClick={() => onSelectCard(value)}>
      <input type="hidden" id={value} value={value} />
      {icon}
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
