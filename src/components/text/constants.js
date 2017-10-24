/* @flow */
import Enum from 'utils/enum';

import COLORS from '../../constants/color';

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

export const TEXT_COLOR = COLORS;
export const TEXT_HOVER_COLOR = COLORS;

export type TEXT_MARGIN = 'none' | 'small' | 'medium' | 'large' | 'extra-large';

export type TEXT_ALIGN = 'center' | 'left' | 'right' | 'none';

export const DEFAULT_HOVER_COLOR = 'none';
export const DEFAULT_COLOR = COLORS.SLATE;
export const DEFAULT_WEIGHT = 'light';
export const DEFAULT_SIZE = 'small';
export const DEFAULT_MARGIN = 'none';
export const DEFAULT_ALIGN = 'none';
