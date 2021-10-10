import '../styles/home.scss';

import React from 'react';

import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import Products from '../components/Products';
import SelectCategory from '../components/SelectCategory';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main-page">
        <SelectCategory />
        <OrderInput />
        <Products />
      </main>
    </>
  );
};

export default HomePage;
