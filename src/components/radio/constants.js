/* @flow */
import Enum from 'utils/enum';

export const RADIO_SIZES = new Enum({
  SMALL: {
    value: 'small',
    size: 14,
  },
  MEDIUM: {
    value: 'medium',
    size: 16,
  },
});

export type RADIO_SIZE = 'small' | 'medium';
