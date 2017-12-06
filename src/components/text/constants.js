/* @flow */
import Enum from 'utils/enum';

export type TEXT_WEIGHT = 'light' | 'normal' | 'medium' | 'semi-bold';

export const TEXT_SIZE = new Enum({
  TINY: {
    value: 'tiny',
  },
  EXTRA_SMALL: {
    value: 'extra-small',
  },
  SMALL: {
    value: 'small',
  },
  MEDIUM: {
    value: 'medium',
  },
  LARGE: {
    value: 'large',
  },
  EXTRA_LARGE: {
    value: 'extra-large',
  },
});

export type TEXT_COLOR =
  | 'red'
  | 'blue'
  | 'green'
  | 'orange'
  | 'purple'
  | 'snow'
  | 'platinum'
  | 'silver'
  | 'slate'
  | 'charcoal'
  | 'white'
  | 'dark-grey' // deprecated
  | 'light-grey' // deprecated
  | 'grey' // deprecated
  | 'none';

// Deprecated Colors:
//  navy, light-grey, dark-grey
export type TEXT_HOVER_COLOR = TEXT_COLOR;

export type TEXT_MARGIN = 'none' | 'small' | 'medium' | 'large' | 'extra-large';

export type TEXT_ALIGN = 'center' | 'left' | 'right' | 'none';

export const DEFAULT_HOVER_COLOR = 'none';
export const DEFAULT_COLOR = 'grey';
export const DEFAULT_WEIGHT = 'light';
export const DEFAULT_SIZE = 'small';
export const DEFAULT_MARGIN = 'none';
export const DEFAULT_ALIGN = 'none';
