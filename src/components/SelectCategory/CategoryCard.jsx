import React, { useRef, useState } from 'react';

const CategoryCard = ({ name, value, icon, notFocusClass, focusClass }) => {
  const barberRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div
        className={!isFocused ? notFocusClass : focusClass}
        onClick={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={-1}>
        <input type="hidden" id={value} ref={barberRef} value={value} />
        {icon}
        <p>{name}</p>
      </div>
    </>
  );
};

export default CategoryCard;
