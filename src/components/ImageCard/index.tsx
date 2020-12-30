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
    <div className='imageCard'>
      <button
        onClick={() =>
          onClick({
            url,
            description,
          })
        }
        className='imageCard__img'
      >
        <img src={url} />
      </button>
      {description && (
        <div className='imageCard__description'>{description}</div>
      )}
      <button className='imageCard__remove' onClick={() => onRemove(index)}>
        Remove
      </button>
    </div>
  );
};

export default ImageCard;
