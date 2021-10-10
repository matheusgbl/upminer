import React, { useState } from 'react';

const CategoryCard = ({ name, value, icon, notFocusClass, focusClass, onSelectCard }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="main-page__categories">
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
    </div>
  );
};

export default CategoryCard;
