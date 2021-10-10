import '../../styles/products.scss';

import React from 'react';
import {
  FaBan,
  FaGavel,
  FaGlobeAmericas,
  FaLandmark,
  FaMale,
  FaPiggyBank,
  FaSketch,
  FaSuitcase,
  FaTree,
} from 'react-icons/fa';

import Card from './Card';

const Products = () => {
  const description = `O aplicativo Balanço Patrimonial realiza a consulta de
  todos os balanços que são publicados nos Diários Oficiais de Empresas S.A.,
  de capital aberto e limitadas (LTDA) de grande porte.`;

  return (
    <div className="main-page__products">
      <Card
        icon={<FaSuitcase />}
        price="69,99"
        productName="Profissional"
        productDescription={description}
      />

      <Card
        icon={<FaLandmark />}
        price="59,99"
        productName="Reguladores"
        productDescription={description}
      />

      <Card
        icon={<FaTree />}
        price="19,99"
        productName="Profissional"
        productDescription={description}
      />

      <Card
        icon={<FaGavel />}
        price="89,99"
        productName="Profissional"
        productDescription={description}
      />

      <Card
        icon={<FaBan />}
        price="29,99"
        productName="Listas Restritivas"
        productDescription={description}
      />

      <Card
        icon={<FaGlobeAmericas />}
        price="49,99"
        productName="Mídia / Internet"
        productDescription={description}
      />

      <Card
        icon={<FaSketch />}
        price="29,99"
        productName="Bens e Imóveis"
        productDescription={description}
      />

      <Card
        icon={<FaMale />}
        price="39,99"
        productName="Cadastro"
        productDescription={description}
      />

      <Card
        icon={<FaPiggyBank />}
        price="19,99"
        productName="Financeiro"
        productDescription={description}
      />

      <Card
        icon={<FaPiggyBank />}
        price="9,99"
        productName="Financeiro"
        productDescription={description}
      />

      <Card
        icon={<FaTree />}
        price="49,99"
        productName="Profissional"
        productDescription={description}
      />

      <Card
        icon={<FaGavel />}
        price="59,99"
        productName="Profissional"
        productDescription={description}
      />
    </div>
  );
};

export default Products;
