const { useParams } = require('react-router-dom');

const Gallery = () => {
  const { dogId } = useParams();
  return <div>Image Gallery: {dogId}</div>;
};

export default Gallery;
