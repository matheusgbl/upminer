import React from 'react';

import logo from '../../assets/upminer_logo.png';

const BannerInfo = ({ product, aboutProduct }) => {
  return (
    <>
      <div className="main-page__header__content__banner">
        <img src={logo} alt="up miner logo" />
        <h1>| {product}</h1>
      </div>
      <div className="main-page__header__content__banner__info">
        <p>{aboutProduct}</p>
      </div>
    </>
  );
};

export default BannerInfo;
