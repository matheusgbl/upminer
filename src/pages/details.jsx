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
        <Link to="/">
          <FaAngleLeft />
          Histórico Empresarial
        </Link>
      </div>
    </main>
  );
};

export default DetailPage;
