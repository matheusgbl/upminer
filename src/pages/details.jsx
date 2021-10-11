import '../styles/details.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React, { useContext } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

import sample from '../assets/sample.png';
import Button from '../components/Button';
import DetailCarousel from '../components/DetailCarousel';
import DetailCard from '../components/DetailCarousel/detailCard';
import Header from '../components/Header';
import { DataContext } from '../context/DataContext';

const DetailPage = () => {
  const { headerContent, serviceContent } = useContext(DataContext);

  const { id } = useParams();
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis
  nunc nunc.`;

  const detailContent = serviceContent.filter((service) => service.id == id);

  return (
    <main className="main-detail-page">
      <Header headerBannerContent={headerContent} />
      {detailContent.map((detail) => (
        <div className="main-detail-page__content" key={detail.id}>
          <div className="main-detail-page__content__infos">
            <div className="main-detail-page__content__return">
              <Link to="/">
                <FaAngleLeft />
                {detail.serviceName}
              </Link>
            </div>
            <div className="main-page-detail__content__carousel">
              <DetailCarousel show={2}>
                <DetailCard img={sample} description={loremIpsum} />
                <DetailCard img={sample} description={loremIpsum} />
                <DetailCard img={sample} description={loremIpsum} />
                <DetailCard img={sample} description={loremIpsum} />
              </DetailCarousel>
            </div>
            <div className="main-page-detail__content__service-description">
              <p>{detail.fullDescription}</p>
            </div>
            <div className="main-page-detail__content__service-price">
              <Button id={detail.id} price={detail.price} text="Habilitar" />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default DetailPage;
