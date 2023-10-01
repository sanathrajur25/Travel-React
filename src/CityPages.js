import React from 'react';
import { useParams } from 'react-router-dom';

const CityPages = () => {
  const { cityId } = useParams();

  const cityDetails = {
    1: {
      name: 'Manali',
      description: 'Manali is a beautiful hill station...',
      // Add more details as needed
    },
    2: {
      name: 'Goa',
      description: 'Goa is a popular beach destination...',
      // Add more details as needed
    },
    3: {
      name: 'Pondicherry',
      description: 'Pondicherry is known for its French architecture...',
      // Add more details as needed
    },
  };

  const city = cityDetails[cityId];

  if (!city) {
    return <div>City not found</div>;
  }

  return (
    <div>
      
    </div>
  );
};

export default CityPages;
