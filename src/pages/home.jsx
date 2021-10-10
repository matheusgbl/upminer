import '../styles/home.scss';

import React, { useEffect, useState } from 'react';
import {
  FaBan,
  FaGavel,
  FaGlobe,
  FaGlobeAmericas,
  FaLandmark,
  FaMale,
  FaPiggyBank,
  FaSketch,
  FaSuitcase,
  FaTree,
} from 'react-icons/fa';

import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import Products from '../components/Products';
import SelectCategory from '../components/SelectCategory';

const HomePage = () => {
  const about = `O aplicativo Histórico Empresarial permite ao usuário ter acesso a
    todos os fatos e acontecimentos relevantes de uma empresa desde o seu
    ano de fundação.`;

  const [headerContent, setHeaderContent] = useState([
    {
      about: about,
      product: 'Histórico Empresarial 1',
      price: '29,99',
    },
    {
      about: about,
      product: 'Histórico Empresarial 2',
      price: '49,99',
    },
    {
      about: about,
      product: 'Histórico Empresarial 3',
      price: '69,99',
    },
  ]);

  const [categoryContent, setCategoryContent] = useState([
    {
      name: 'Todos',
      icon: <FaGlobe />,
      focusClass: 'main-page__category 1 focused',
      notFocusClass: 'main-page__category 1',
      value: 'todos',
    },
    {
      name: 'Profissional',
      icon: <FaSuitcase />,
      focusClass: 'main-page__category 2 focused',
      notFocusClass: 'main-page__category 2',
      value: 'profissional',
    },
    {
      name: 'Reguladores',
      icon: <FaLandmark />,
      focusClass: 'main-page__category 3 focused',
      notFocusClass: 'main-page__category 3',
      value: 'reguladores',
    },
    {
      name: 'Sócio Ambiental',
      icon: <FaTree />,
      focusClass: 'main-page__category 4 focused',
      notFocusClass: 'main-page__category 4',
      value: 'ambiental',
    },
    {
      name: 'Jurídico',
      icon: <FaGavel />,
      focusClass: 'main-page__category 5 focused',
      notFocusClass: 'main-page__category 5',
      value: 'juridico',
    },
    {
      name: 'Listas Restritivas',
      icon: <FaBan />,
      focusClass: 'main-page__category 6 focused',
      notFocusClass: 'main-page__category 6',
      value: 'restritivas',
    },
    {
      name: 'Mídia / Internet',
      icon: <FaGlobeAmericas />,
      focusClass: 'main-page__category 7 focused',
      notFocusClass: 'main-page__category 7',
      value: 'internet',
    },
    {
      name: 'Bens e Imóveis',
      icon: <FaSketch />,
      focusClass: 'main-page__category 8 focused',
      notFocusClass: 'main-page__category 8',
      value: 'imoveis',
    },
    {
      name: 'Cadastro',
      icon: <FaMale />,
      focusClass: 'main-page__category 9 focused',
      notFocusClass: 'main-page__category 9',
      value: 'cadastro',
    },
    {
      name: 'Financeiro',
      icon: <FaPiggyBank />,
      focusClass: 'main-page__category 10 focused',
      notFocusClass: 'main-page__category 10',
      value: 'financeiro',
    },
  ]);

  const [productContent, setProductContent] = useState([
    {
      icon: <FaSuitcase />,
      price: '69,99',
      productName: 'Profissional',
    },
    {
      icon: <FaLandmark />,
      price: '59,99',
      productName: 'Reguladores',
    },
    {
      icon: <FaTree />,
      price: '19,99',
      productName: 'Sócio Ambiental',
    },
    {
      icon: <FaGavel />,
      price: '89,99',
      productName: 'Jurídico',
    },
    {
      icon: <FaBan />,
      price: '29,99',
      productName: 'Listas Restritivas',
    },
    {
      icon: <FaGlobeAmericas />,
      price: '49,99',
      productName: 'Mídia / Internet',
    },
    {
      icon: <FaSketch />,
      price: '69,99',
      productName: 'Bens e Imóveis',
    },
    {
      icon: <FaMale />,
      price: '39,99',
      productName: 'Cadastro',
    },
    {
      icon: <FaPiggyBank />,
      price: '19,99',
      productName: 'Financeiro',
    },
    {
      icon: <FaPiggyBank />,
      price: '9,99',
      productName: 'Financeiro',
    },
    {
      icon: <FaTree />,
      price: '39,99',
      productName: 'Profissional',
    },
    {
      icon: <FaGavel />,
      price: '19,99',
      productName: 'Profissional',
    },
  ]);

  return (
    <main className="main-page">
      <Header headerBannerContent={headerContent} />
      <div className="main-page__content">
        <SelectCategory categories={categoryContent} />
        <OrderInput price="preco" release="lancamento" />
        <Products products={productContent} />
      </div>
    </main>
  );
};

export default HomePage;
