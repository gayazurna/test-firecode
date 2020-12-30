import React from 'react';

export enum ButtonType {
  Primary = 'primary',
}
export type ButtonProps = {
  children: React.ReactChildren | string,
  type: ButtonType,
  onClick: () => void,
  isDisabled?: boolean,
};
