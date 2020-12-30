import React from 'react';
import { ImageProps } from './types';
import Button, { ButtonType } from '../Button';
import './style.scss';

const ImageCard = ({ url, description, onClick }: ImageProps) => {
  const clickHandler = () => {};
  return (
    <button className='imageCard'>
      <div className='imageCard__img'>
        <img src={url} />
      </div>
      {description && (
        <div className='imageCard__description'>{description}</div>
      )}
      <Button type={ButtonType.Primary} onClick={clickHandler}>
        Remove
      </Button>
    </button>
  );
};

export default ImageCard;
