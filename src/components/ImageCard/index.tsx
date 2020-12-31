import React from 'react';
import { ImageProps } from './types';

import './style.scss';

const ImageCard = ({
  url,
  description,
  onClick,
  onRemove,
  index,
}: ImageProps) => {
  return (
    <div className='ImageCard'>
      <button
        onClick={() =>
          onClick({
            url,
            description,
          })
        }
        className='ImageCard__img'
      >
        <img src={url} alt='Nicolas Cage' />
      </button>
      {description && (
        <div className='ImageCard__description'>{description}</div>
      )}
      <button className='ImageCard__remove' onClick={() => onRemove(index)}>
        Удалить
      </button>
    </div>
  );
};

export default ImageCard;
