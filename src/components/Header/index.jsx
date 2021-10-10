import '../../styles/header.scss';

import React from 'react';

import logo from '../../assets/upminer_logo.png';
import Carousel, { CarouselItem } from '../Carousel';
import BannerInfo from './bannerInfo';
import BannerPrice from './bannerPrice';

const Header = () => {
  return (
    <>
      <header className="up-header">
        <div className="up-header__content">
          <Carousel>
            <CarouselItem>
              <div className="up-header__content__carousel">
                <BannerInfo
                  img={logo}
                  product="Histórico Empresarial 1"
                  aboutProduct="O aplicativo Histórico Empresarial permite ao usuário ter acesso a
                    todos os fatos e acontecimentos relevantes de uma empresa desde o seu
                    ano de fundação."
                />
                <BannerPrice price="40,00" btnText="Saiba mais" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="up-header__content__carousel">
                <BannerInfo
                  img={logo}
                  product="Histórico Empresarial 2"
                  aboutProduct="O aplicativo Histórico Empresarial permite ao usuário ter acesso a
                    todos os fatos e acontecimentos relevantes de uma empresa desde o seu
                    ano de fundação."
                />
                <BannerPrice price="40,00" btnText="Saiba mais" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="up-header__content__carousel">
                <BannerInfo
                  img={logo}
                  product="Histórico Empresarial 3"
                  aboutProduct="O aplicativo Histórico Empresarial permite ao usuário ter acesso a
                    todos os fatos e acontecimentos relevantes de uma empresa desde o seu
                    ano de fundação."
                />
                <BannerPrice price="40,00" btnText="Saiba mais" />
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </header>
      <div className="up-header__line" />
    </>
  );
};

export default Header;
