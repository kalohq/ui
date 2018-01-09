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
  /* PINK */
  | 'pink'
  | 'pink300'
  | 'pink400'
  | 'pink500'
  | 'pink600'
  | 'pink700'
  /* GREEN */
  | 'green'
  | 'green300'
  | 'green400'
  | 'green500'
  | 'green600'
  | 'green700'
  /* BLUE */
  | 'blue'
  | 'blue300'
  | 'blue400'
  | 'blue500'
  | 'blue600'
  | 'blue700'
  /* PURPLE */
  | 'purple'
  | 'purple300'
  | 'purple400'
  | 'purple500'
  | 'purple600'
  | 'purple700'
  /* ORANGE */
  | 'orange'
  | 'orange300'
  | 'orange400'
  | 'orange500'
  | 'orange600'
  | 'orange700'
  /* NAVY */
  | 'navy'
  | 'navy300'
  | 'navy400'
  | 'navy500'
  | 'navy600'
  | 'navy700'
  /* GREY */
  | 'grey'
  | 'grey200'
  | 'grey300'
  | 'grey400'
  | 'grey500'
  | 'grey600'
  | 'grey700'
  /* MISC */
  | 'white'
  | 'black'
  | 'none'
  /* DEPRECATED */
  | 'red'
  | 'snow' // deprecated
  | 'platinum' // deprecated
  | 'silver' // deprecated
  | 'slate' // deprecated
  | 'charcoal' // deprecated
  | 'dark-grey' // deprecated
  | 'light-grey'; // deprecated

export type TEXT_HOVER_COLOR = TEXT_COLOR;

export type TEXT_ALIGN = 'center' | 'left' | 'right' | 'initial' | 'unset';

export const WEIGHT_MAP = {
  light: 300,
  normal: 400,
  medium: 500,
  'semi-bold': 600,
};

export const SIZE_MAP = {
  'extra-extra-small': 10,
  'extra-small': 12,
  small: 14,
  medium: 16,
  large: 18,
  'extra-large': 24,
  'extra-extra-large': 32,
  'extra-extra-extra-large': 32,
};
