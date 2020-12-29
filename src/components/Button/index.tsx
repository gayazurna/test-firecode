import React from 'react';
import { ButtonProps, ButtonType } from './types';

import './style.scss';

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className='button button__primary' onClick={onClick}>
      {children}{' '}
    </button>
  );
};
export default Button;
export { ButtonType };
