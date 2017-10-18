/* @flow */

import Enum from 'utils/enum';

import type {TEXT_COLOR} from '../text/constants';

export type ICON_SIZE = 12 | 14 | 16 | 18 | 20 | 23 | 24 | 26 | 36 | 48;
export type ICON_COLOR = TEXT_COLOR;

export const DEFAULT_SIZE = 16;
export const DEFAULT_COLOR = 'red';

export const ICONS = new Enum({
  ACCESS_TIME: {
    value: 'access_time',
  },
  ACCOUNT_BALANCE: {
    value: 'account_balance',
  },
  ACCOUNT_BALANCE_WALLET: {
    value: 'account_balance_wallet',
  },
  ARCHIVE: {
    value: 'archive',
  },
  ARROW_DROP_DOWN: {
    value: 'arrow_drop_down',
  },
  ARROW_DROP_UP: {
    value: 'arrow_drop_up',
  },
  ASSIGNMENT: {
    value: 'assignment',
  },
  AUTORENEW: {
    value: 'autorenew',
  },
  CHAT: {
    value: 'chat',
  },
  CHECK_BOX_OUTLINE_BLANK: {
    value: 'check_box_outline_blank',
  },
  CHECK_BOX: {
    value: 'check_box',
  },
  CHECK: {
    value: 'check',
  },
  CHEVRON_LEFT: {
    value: 'chevron_left',
  },
  CHEVRON_RIGHT: {
    value: 'chevron_right',
  },
  CLOSE: {
    value: 'close',
  },
  DATE_RANGE: {
    value: 'date_range',
  },
  DONE: {
    value: 'done',
  },
  EDIT: {
    value: 'edit',
  },
  GROUP: {
    value: 'group',
  },
  HELP_OUTLINE: {
    value: 'help_outline',
  },
  HIGHLIGHT_OFF: {
    value: 'highlight_off',
  },
  INFO: {
    value: 'info',
  },
  INSERT_DRIVE_FILE: {
    value: 'insert_drive_file',
  },
  KEYBOARD_ARROW_DOWN: {
    value: 'keyboard_arrow_down',
  },
  KEYBOARD_ARROW_LEFT: {
    value: 'keyboard_arrow_left',
  },
  KEYBOARD_ARROW_RIGHT: {
    value: 'keyboard_arrow_right',
  },
  KEYBOARD_ARROW_UP: {
    value: 'keyboard_arrow_up',
  },
});
