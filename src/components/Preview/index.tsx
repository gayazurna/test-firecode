import React from 'react';
import { PreviewProps } from './types';
import './style.scss';

const Preview = ({ url, description, onClose }: PreviewProps) => {
  return (
    <div className='Preview'>
      <div className='Preview__image'>
        <img src={url} />
        <button className='Preview__close' onClick={onClose}>
          X
        </button>
      </div>
      <div className='Preview__description'>{description}</div>
    </div>
  );
};
export default Preview;
