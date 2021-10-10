import '../styles/home.scss';

import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import Products from '../components/Products';
import SelectCategory from '../components/SelectCategory';

const HomePage = () => {
  const about = `O aplicativo Histórico Empresarial permite ao usuário ter acesso a
    todos os fatos e acontecimentos relevantes de uma empresa desde o seu
    ano de fundação.`;

  const [headerContent, setHeaderContent] = useState([]);

  useEffect(() => {
    setHeaderContent([
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
  }, []);

  return (
    <main className="main-page">
      <Header headerBannerContent={headerContent} />
      <div className="main-page__content">
        <SelectCategory />
        <OrderInput />
        <Products />
      </div>
    </main>
  );
};

export default HomePage;
