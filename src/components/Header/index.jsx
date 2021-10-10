import '../../styles/header.scss';

import React from 'react';

import Carousel, { CarouselItem } from '../Carousel';
import BannerInfo from './bannerInfo';
import BannerPrice from './bannerPrice';

const Header = ({ headerBannerContent }) => {
  return (
    <>
      <header className="main-page__header">
        <div className="main-page__header__content">
          <Carousel>
            {headerBannerContent.map((item, index) => (
              <CarouselItem key={index}>
                <div className="main-page__header__content__carousel">
                  <BannerInfo product={item.product} aboutProduct={item.about} />
                  <BannerPrice price={item.price} />
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </header>
      <div className="main-page__header__line" />
    </>
  );
};

export default Header;
