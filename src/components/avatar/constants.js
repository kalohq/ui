/* @flow */
import {Map} from 'immutable';

export const AVATAR_SIZES = new Map({
  SMALL: {
    value: 'small',
    size: 25,
  },
  MEDIUM: {
    value: 'medium',
    size: 36,
  },
  LARGE: {
    value: 'large',
    size: 60,
  },
  X_LARGE: {
    value: 'x-large',
    size: 90,
  },
  JUMBO: {
    value: 'jumbo',
    size: 200,
  },
});

export type AVATAR_SIZE = 'small' | 'medium' | 'large' | 'x-large' | 'jumbo';

export const AVATAR_COLORS = Map({
  0: 'green',
  1: 'blue',
  2: 'purple',
  3: 'grey',
  4: 'yellow',
});

export const DEFAULT_SIZE = AVATAR_SIZES.get('MEDIUM');

export const GRAVATAR_FALLBACK_SIZE = 250;
