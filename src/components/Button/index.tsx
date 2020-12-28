import React from 'react';

import {ButtonProps, ButtonType} from './types'
const Button = ({children}: ButtonProps) => {

  return (
    <button>{children}</button>
  )
}
export default Button;
export {ButtonType}
