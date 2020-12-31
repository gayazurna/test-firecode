import React from 'react';
import { InputProps } from './types';
import './style.scss';

const InputLink = ({ value, onChange }: InputProps) => {
  return (
    <input
      type='url'
      placeholder='Введите ссылку на изображение'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputLink;
