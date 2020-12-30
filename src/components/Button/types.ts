import React from 'react';

export type ButtonProps = {
  children: React.ReactChildren | string,
  onClick: () => void,
  isDisabled?: boolean,
};
