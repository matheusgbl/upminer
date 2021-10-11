import '../../styles/detailCard.scss';

import React from 'react';

const DetailCard = ({ img, description }) => {
  return (
    <div className="main-page-detail__content__carousel-item">
      <img src={img} alt="service" />
      <p>{description}</p>
    </div>
  );
};

export default DetailCard;
