import '../../styles/services.scss';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

import Card from './Card';

const Services = ({ services }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.set((index) => ({
      opacity: 0,
      x: -200,
      scale: 1.3,
      transition: { delay: index * 0.3, ease: 'anticipate' },
    }));
    controls.start((index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { delay: index * 0.3 },
    }));
  }, [controls]);

  return (
    <div className="main-page__content__services" data-testid="service-cards">
      {services.map((item, index) => (
        <motion.div key={index} custom={index} animate={controls}>
          <Card
            icon={item.icon}
            price={item.price}
            serviceName={item.serviceName}
            serviceDescription={item.description}
            id={item.id}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
