/* @flow */
import Enum from '../../utils/enum';

export const CHECKBOX_SIZES = new Enum({
  SMALL: {
    value: 'small',
    size: 12,
  },
  MEDIUM: {
    value: 'medium',
    size: 14,
  },
  LARGE: {
    value: 'large',
    size: 16,
  },
});

export type CHECKBOX_SIZE = 'small' | 'medium' | 'large';
