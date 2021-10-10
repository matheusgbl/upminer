import '../../styles/categories.scss';

import React from 'react';

import CategoryCard from './CategoryCard';

const SelectCategory = ({ categories, onSelectCard }) => {
  return (
    <div className="main-page__categories">
      {categories.map((item, index) => (
        <CategoryCard
          name={item.name}
          icon={item.icon}
          focusClass={item.focusClass}
          notFocusClass={item.notFocusClass}
          value={item.name}
          key={index}
          onSelectCard={onSelectCard}
        />
      ))}
    </div>
  );
};

export default SelectCategory;
