import React from 'react';
import { useLocation } from 'react-router';

import logo from '../../assets/upminer_logo.png';
import logoColor from '../../assets/upminer_logoColor.png';

const BannerInfo = ({ product, aboutProduct }) => {
  const location = useLocation();

  return (
    <>
      <div className="main-page__header__content__banner">
        <img
          src={location.pathname.includes('detail') ? logoColor : logo}
          alt="up miner logo"
        />
        <h1>| {product}</h1>
      </div>
      <div className="main-page__header__content__banner__info">
        <p>{aboutProduct}</p>
      </div>
    </>
  );
};

export default BannerInfo;
