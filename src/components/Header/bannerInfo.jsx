import React from 'react';

const BannerInfo = ({ img, product, aboutProduct }) => {
  return (
    <>
      <div className="up-header__content__banner">
        <img src={img} alt="up miner logo" />
        <h1>| {product}</h1>
      </div>
      <div className="up-header__content__banner__info">
        <p>{aboutProduct}</p>
      </div>
    </>
  );
};

export default BannerInfo;
