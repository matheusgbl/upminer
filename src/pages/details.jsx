import '../styles/details.scss';

import React, { useContext } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

const DetailPage = () => {
  const { headerContent } = useContext(DataContext);

  return (
    <main className="main-detail-page">
      <Header headerBannerContent={headerContent} />
      <div className="main-detail-page__content">
        <div className="main-detail-page__content__return">
          <Link to="/">
            <FaAngleLeft />
            Histórico Empresarial
          </Link>
        </div>
        <div className="main-page-detail__content__carousel">
          <p>Item1</p>
          <p>Item2</p>
        </div>
        <div className="main-page-detail__content__service-description">
          <p>product description</p>
        </div>
        <div className="main-page-detail__content__service-price">
          <p>price</p> <span>button</span>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
