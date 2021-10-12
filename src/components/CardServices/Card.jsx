import '../../styles/services.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ icon, serviceName, serviceDescription, price, id }) => {
  return (
    <div className="main-page__content__service-card" data-testid="service-card-content">
      <div
        className="main-page__content__service-card__info"
        data-testid={`service-card-info-${id}`}>
        {icon}
        <h3>{serviceName}</h3>
        <p data-testid={`service-card-description-${id}`}>{serviceDescription}</p>
      </div>
      <Link
        to={`/product-detail/${id}`}
        className="main-page__content__service-card__info__button"
        data-testid={`service-card-btn-${id}`}>
        <p>R$ {price}</p>
        <p>Saiba mais</p>
      </Link>
    </div>
  );
};

export default Card;
