import React from 'react';
import { ButtonProps } from './types';

import './style.scss';

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <button className='Button' onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
export default Button;
