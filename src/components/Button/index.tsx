import React from 'react';
import { ButtonProps, ButtonType } from './types';

import './style.scss';

const Button = ({ children }: ButtonProps) => {
  return <button className='button button__primary'>{children}</button>;
};
export default Button;
export { ButtonType };
