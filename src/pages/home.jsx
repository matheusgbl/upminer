import '../styles/home.scss';

import React, { useContext } from 'react';

import Services from '../components/CardServices';
import CategoryInput from '../components/CategoryInput';
import Header from '../components/Header';
import OrderInput from '../components/OrderInput';
import SelectCategory from '../components/SelectCategory';
import { DataContext } from '../context/DataContext';

const HomePage = () => {
  const {
    headerContent,
    categoryContent,
    sortBy,
    isFiltered,
    serviceContent,
    filteredServices,
    handleCategory,
    handleSort,
    handleService,
  } = useContext(DataContext);

  return (
    <main className="main-page">
      <Header headerBannerContent={headerContent} />
      <div className="main-page__content">
        <SelectCategory categories={categoryContent} onSelectCard={handleCategory} />
        <CategoryInput categories={categoryContent} onChangeValue={handleCategory} />
        <OrderInput value={sortBy} onChangeValue={handleSort} />
        <Services
          services={!isFiltered ? serviceContent : filteredServices}
          onSelectCard={handleService}
        />
      </div>
    </main>
  );
};

export default HomePage;
