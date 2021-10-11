import React from 'react';
import { useLocation } from 'react-router';

import logo from '../../assets/upminer_logo.png';
import logoColor from '../../assets/upminer_logoColor.png';

const BannerInfo = ({ product, aboutProduct, id }) => {
  const location = useLocation();

  return (
    <>
      <div className="main-page__header__content__banner">
        <img
          src={location.pathname.includes('detail') ? logoColor : logo}
          alt={`up-miner-logo-${id}`}
        />
        <h1>| {product}</h1>
      </div>
      <div className="main-page__header__content__banner__info">
        <p data-testid={`product-about-${id}`}>{aboutProduct}</p>
      </div>
    </>
  );
};

export default BannerInfo;
