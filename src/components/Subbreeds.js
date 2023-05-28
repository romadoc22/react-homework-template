import React from 'react';
const { useParams } = require('react-router-dom');

const Subbreeds = () => {
  const { dogId } = useParams();
  return <div>Subbreeds: {dogId}</div>;
};

export default Subbreeds;
