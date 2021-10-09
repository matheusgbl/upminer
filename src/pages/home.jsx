import '../styles/home.scss';

import React from 'react';

import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import SelectCategory from '../components/SelectCategory';

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main-page">
        <SelectCategory />
        <OrderInput />
      </main>
    </>
  );
};

export default HomePage;
