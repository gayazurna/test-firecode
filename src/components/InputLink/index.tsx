import React from 'react';
import { InputLinkProps } from './types';
import './style.scss';

const InputLink = ({ value, onChange }: InputLinkProps) => {
  return (
    <input
      type='url'
      placeholder='url'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputLink;
