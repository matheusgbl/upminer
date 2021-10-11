import '../../styles/services.scss';

import React from 'react';

import Card from './Card';

const Services = ({ services }) => {
  return (
    <div className="main-page__services">
      {services.map((item, index) => (
        <Card
          icon={item.icon}
          price={item.price}
          serviceName={item.serviceName}
          serviceDescription={item.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default Services;
