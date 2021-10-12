import '../styles/details.scss';
import 'react-multi-carousel/lib/styles.css';

import React, { useContext } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import { Link, useParams } from 'react-router-dom';

import sample from '../assets/sample.png';
import Button from '../components/Button';
import DetailCard from '../components/DetailCard';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

const DetailPage = () => {
  const { headerContent, serviceContent } = useContext(DataContext);

  const { id } = useParams();

  const detailContent = serviceContent.filter((service) => service.id == id);
  const detailHeaderContent = headerContent.filter((service) => service.id == id);

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis
  nunc nunc.`;
  const moreAbout = `Após realizar a consulta, o histórico é salvo automaticamente, tornando as
  informações acessíveis ao usuário. A linha do tempo pode também ser exportada
  no formato PDF.`;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1580 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1580, min: 1050 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1050, min: 0 },
      items: 1,
    },
  };

  return (
    <main className="detail-page" data-testid="detail-page">
      <Header headerBannerContent={headerContent} />
      {detailContent.length === 0
        ? detailHeaderContent.map((detail) => (
            <div className="detail-page__content" key={detail.id}>
              <div className="detail-page__content__infos">
                <div className="detail-page__content__return">
                  <Link to="/" data-testid="return-link">
                    <FaAngleLeft />
                    {detail.service}
                  </Link>
                </div>
                <div
                  className="detail-page__content__carousel"
                  data-testid="service-detail-card">
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={2000}
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable>
                    <DetailCard img={sample} description={loremIpsum} />
                    <DetailCard img={sample} description={loremIpsum} />
                    <DetailCard img={sample} description={loremIpsum} />
                    <DetailCard img={sample} description={loremIpsum} />
                  </Carousel>
                </div>
                <div className="detail-page__content__service-description">
                  <p data-testid="detail-description">{detail.description}</p>
                  <p data-testid="detail-more-about">{moreAbout}</p>
                </div>
                <div className="detail-page__content__service-price">
                  <Button id={detail.id} price={detail.price} text="Habilitar" />
                </div>
              </div>
            </div>
          ))
        : detailContent.map((detail) => (
            <div className="detail-page__content" key={detail.id}>
              <div className="detail-page__content__infos">
                <div className="detail-page__content__return">
                  <Link to="/" data-testid="return-link">
                    <FaAngleLeft />
                    {detail.serviceName}
                  </Link>
                </div>
                <div
                  className="detail-page__content__carousel"
                  data-testid="service-detail-card">
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={2000}
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable>
                    <DetailCard img={sample} description={loremIpsum} />
                    <DetailCard img={sample} description={loremIpsum} />
                    <DetailCard img={sample} description={loremIpsum} />
                    <DetailCard img={sample} description={loremIpsum} />
                  </Carousel>
                </div>
                <div className="detail-page__content__service-description">
                  <p data-testid="detail-description">{detail.fullDescription}</p>
                  <p data-testid="detail-more-about">{moreAbout}</p>
                </div>
                <div className="detail-page__content__service-price">
                  <Button id={detail.id} price={detail.price} text="Habilitar" />
                </div>
              </div>
            </div>
          ))}
    </main>
  );
};

export default DetailPage;
