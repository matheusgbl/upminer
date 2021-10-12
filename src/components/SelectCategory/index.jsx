import '../../styles/categories.scss';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

import CategoryCard from './CategoryCard';

const SelectCategory = ({ categories, onSelectCard }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set((index) => ({
      opacity: 0,
      x: -200,
      scale: 1.3,
      transition: { delay: index * 0.3, ease: 'anticipate' },
    }));
    controls.start((index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { delay: index * 0.3 },
    }));
  }, [controls]);

  return (
    <div className="main-page__content__categories" data-testid="category-card">
      {categories.map((item, index) => (
        <motion.div key={index} custom={index} animate={controls}>
          <CategoryCard
            name={item.name}
            icon={item.icon}
            focusClass={item.focusClass}
            notFocusClass={item.notFocusClass}
            value={item.name}
            onSelectCard={onSelectCard}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SelectCategory;
