import '../styles/home.scss';

import React, { useContext } from 'react';

import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import Products from '../components/Products';
import SelectCategory from '../components/SelectCategory';
import { DataContext } from '../context/DataContext';

const HomePage = () => {
  const {
    headerContent,
    categoryContent,
    handleCategory,
    sortBy,
    handleSort,
    isFiltered,
    productContent,
    filteredProducts,
  } = useContext(DataContext);

  return (
    <main className="main-page">
      <Header headerBannerContent={headerContent} />
      <div className="main-page__content">
        <SelectCategory categories={categoryContent} onSelectCard={handleCategory} />
        <OrderInput value={sortBy} onChangeValue={handleSort} />
        <Products products={!isFiltered ? productContent : filteredProducts} />
      </div>
    </main>
  );
};

export default HomePage;
