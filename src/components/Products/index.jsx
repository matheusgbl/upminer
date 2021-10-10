import '../../styles/products.scss';

import React from 'react';

import Card from './Card';

const Products = ({ products }) => {
  const description = `O aplicativo Balanço Patrimonial realiza a consulta de
  todos os balanços que são publicados nos Diários Oficiais de Empresas S.A.,
  de capital aberto e limitadas (LTDA) de grande porte.`;

  return (
    <div className="main-page__products">
      {products.map((item, index) => (
        <Card
          icon={item.icon}
          price={item.price}
          productName={item.productName}
          productDescription={description}
          key={index}
        />
      ))}
    </div>
  );
};

export default Products;
