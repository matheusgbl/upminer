import '../../styles/products.scss';

import React from 'react';

import Card from './Card';

const Products = ({ products }) => {
  return (
    <div className="main-page__products">
      {products.map((item, index) => (
        <Card
          icon={item.icon}
          price={item.price}
          productName={item.productName}
          productDescription={item.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default Products;
