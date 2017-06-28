/* @flow */

import type {TEXT_COLOR} from '../text/constants';

export type ICON_SIZE = 12 | 14 | 16 | 18 | 20 | 23 | 24 | 26 | 36 | 48;

export type ICON_THEME =
  | 'light'
  | 'dark'
  | 'positive'
  | 'negative'
  | 'pending'
  | 'blue';

export type ICON_COLOR = TEXT_COLOR;

export type ICON_WEIGHT = 'normal' | 'bold';

export type ICON_FAMILY = 'material' | 'fontello';

export const FONTELLO_ICONS = {
  linkedin: '\ue800',
  twitter: '\ue801',
  globe: '\ue802',
  website: '\ue802',
  instagram: '\ue803',
  youtube: '\ue804',
};

export const DEFAULT_SIZE = 16;
export const DEFAULT_WEIGHT = 'normal';
export const DEFAULT_COLOR = 'none';
export const DEFAULT_FAMILY = 'material';
