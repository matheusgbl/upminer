import '../../styles/services.scss';

import React from 'react';

const Card = ({ icon, serviceName, serviceDescription, price }) => {
  return (
    <div className="main-page__service-card">
      <div className="main-page__service-card__info">
        {icon}
        <h3>{serviceName}</h3>
        <p>{serviceDescription}</p>
      </div>
      <div className="main-page__service-card__info__button">
        <p>R$ {price}</p>
        <p>Saiba mais</p>
      </div>
    </div>
  );
};

export default Card;
