import '../styles/home.scss';

import React, { useContext } from 'react';

import Services from '../components/CardServices';
import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
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
    serviceContent,
    filteredServices,
  } = useContext(DataContext);

  return (
    <main className="main-page">
      <Header headerBannerContent={headerContent} />
      <div className="main-page__content">
        <SelectCategory categories={categoryContent} onSelectCard={handleCategory} />
        <OrderInput value={sortBy} onChangeValue={handleSort} />
        <Services services={!isFiltered ? serviceContent : filteredServices} />
      </div>
    </main>
  );
};

export default HomePage;
