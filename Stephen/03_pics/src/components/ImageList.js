import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  // const images = props.images.map(image => (
  //   <img key={image.id} src={image.urls.regular} alt={image.description} />
  // ));
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
