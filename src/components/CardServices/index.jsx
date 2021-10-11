import '../../styles/services.scss';

import React from 'react';

import Card from './Card';

const Services = ({ services, onSelectCard }) => {
  return (
    <div className="main-page__services">
      {services.map((item, index) => (
        <Card
          icon={item.icon}
          price={item.price}
          serviceName={item.serviceName}
          serviceDescription={item.description}
          id={item.id}
          onSelectCard={onSelectCard}
          key={index}
        />
      ))}
    </div>
  );
};

export default Services;
