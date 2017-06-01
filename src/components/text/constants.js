/* @flow */
export type TEXT_WEIGHT = 'normal' | 'semi-bold';

export type TEXT_SIZE =
  | 'tiny'
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large';

export type TEXT_COLOR =
  | 'red'
  | 'blue'
  | 'dark-blue'
  | 'dark-grey'
  | 'grey'
  | 'light-grey'
  | 'white'
  | 'green'
  | 'orange'
  | 'navy'
  | 'none';

export type TEXT_HOVER_COLOR = TEXT_COLOR;

export type TEXT_MARGIN = 'none' | 'small' | 'medium' | 'large' | 'extra-large';

export type TEXT_ALIGN = 'center' | 'left' | 'right' | 'none';

export const DEFAULT_HOVER_COLOR = 'none';
export const DEFAULT_COLOR = 'grey';
export const DEFAULT_WEIGHT = 'normal';
export const DEFAULT_SIZE = 'small';
export const DEFAULT_MARGIN = 'none';
export const DEFAULT_ALIGN = 'none';
