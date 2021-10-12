import '../../styles/header.scss';

import React from 'react';

import Button from '../Button';
import Carousel, { CarouselItem } from '../Carousel';
import BannerInfo from './bannerInfo';

const Header = ({ headerBannerContent }) => {
  return (
    <div data-testid="header-component">
      <Carousel>
        {headerBannerContent.map((item, index) => (
          <CarouselItem key={index}>
            <header className="main-page__header">
              <div className="main-page__header__content">
                <div
                  className="main-page__header__content__carousel-item"
                  data-testid={`header-carousel-${index}`}>
                  <BannerInfo
                    id={item.id}
                    service={item.service}
                    aboutService={item.about}
                  />
                  <div className="main-page__header__content__banner__price">
                    <Button price={item.price} id={item.id} text="Saiba mais" />
                  </div>
                </div>
              </div>
            </header>
          </CarouselItem>
        ))}
      </Carousel>
      <div className="main-page__header__line" />
    </div>
  );
};

export default Header;
