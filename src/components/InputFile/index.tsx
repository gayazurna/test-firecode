import React from 'react';
import { InputFileProps } from './types';
import './style.scss';

const InputFile = ({ onChange }: InputFileProps) => {
  return (
    <>
      <input type='file' onChange={(e) => onChange(e)} />
    </>
  );
};

export default InputFile;
