// src/pages/DestinationWedding.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import DestinationTemplate from '../components/DestinationTemplate';
import { destinationData } from '../Data/destinationData'

const DestinationWedding = () => {
  const { location } = useParams();
  const destination = destinationData[location];

  return <DestinationTemplate destination={destination} />;
};

export default DestinationWedding;