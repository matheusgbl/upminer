import '../../styles/services.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ icon, serviceName, serviceDescription, price, id }) => {
  return (
    <div className="main-page__service-card">
      <div className="main-page__service-card__info">
        {icon}
        <h3>{serviceName}</h3>
        <p>{serviceDescription}</p>
      </div>
      <Link
        to={`/product-detail/${id}`}
        className="main-page__service-card__info__button">
        <p>R$ {price}</p>
        <p>Saiba mais</p>
      </Link>
    </div>
  );
};

export default Card;
