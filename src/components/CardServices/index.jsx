import '../../styles/services.scss';

import React from 'react';

import Card from './Card';

const Services = ({ services }) => {
  return (
    <div className="main-page__content__services" data-testid="service-cards">
      {services.map((item, index) => (
        <Card
          icon={item.icon}
          price={item.price}
          serviceName={item.serviceName}
          serviceDescription={item.description}
          id={item.id}
          key={index}
        />
      ))}
    </div>
  );
};

export default Services;
