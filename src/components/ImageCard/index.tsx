import React from 'react';
import { ImageProps } from './types';
import './style.scss';

const ImageCard = ({ url, description, onClick }: ImageProps) => {
  return (
    <button className='imageCard'>
      <div className='imageCard__img'>
        <img src={url} />
      </div>
      {description && (
        <div className='imageCard__description'>{description}</div>
      )}
    </button>
  );
};

export default ImageCard;
