/* @flow */

import Enum from 'utils/enum';

import type {TEXT_COLOR} from '../text/constants';

export type ICON_SIZE = 12 | 14 | 16 | 18 | 20 | 23 | 24 | 26 | 36 | 48;
export type ICON_COLOR = TEXT_COLOR;

export const DEFAULT_SIZE = 16;
export const DEFAULT_COLOR = 'charcoal';

export const ICONS = new Enum({
  ACCESS_TIME: {
    value: 'access_time',
  },
  ADD: {
    value: 'add',
  },
  INFO_OUTLINE: {
    value: 'info_outline',
  },
  EXTENSION: {
    value: 'extension',
  },
  BORDER_COLOR: {
    value: 'border_color',
  },
  CLEAR: {
    value: 'clear',
  },
  CREDIT_CARD: {
    value: 'credit_card',
  },
  PEOPLE: {
    value: 'people',
  },
  DELETE: {
    value: 'delete',
  },
  PERSON: {
    value: 'person',
  },
  DONE_ALL: {
    value: 'done_all',
  },
  REMOVE: {
    value: 'remove',
  },
  EMAIL: {
    value: 'email',
  },
  SEND: {
    value: 'send',
  },
  SETTINGS: {
    value: 'settings',
  },
  VIEW_WEEK: {
    value: 'view_week',
  },
  MODE_EDIT: {
    value: 'mode_edit',
  },
  LOOP: {
    value: 'loop',
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
  KEYBOARD_RETURN: {
    value: 'keyboard_return',
  },
  LAUNCH: {
    value: 'launch',
  },
  LINK: {
    value: 'link',
  },
  LOCAL_OFFER: {
    value: 'local_offer',
  },
  LOCATION_ON: {
    value: 'location_on',
  },
  LOCK: {
    value: 'lock',
  },
  MAIL: {
    value: 'mail',
  },
  MESSAGE: {
    value: 'message',
  },
  MORE_VERT: {
    value: 'more_vert',
  },
  NOTE_ADD: {
    value: 'note_add',
  },
  NOTIFICATIONS: {
    value: 'notifications',
  },
  OPEN_IN_NEW: {
    value: 'open_in_new',
  },
  PERSON_OUTLINE: {
    value: 'person_outline',
  },
  PICTURE_AS_PDF: {
    value: 'picture_as_pdf',
  },
  PRESENT_TO_ALL: {
    value: 'present_to_all',
  },
  RECEIPT: {
    value: 'receipt',
  },
  REMOVE_CIRCLE: {
    value: 'remove_circle',
  },
  SEARCH: {
    value: 'search',
  },
  STAR: {
    value: 'star',
  },
  VERIFIED_USER: {
    value: 'verified_user',
  },
  VIEW_HEADLINE: {
    value: 'view_headline',
  },
  VIEW_MODULE: {
    value: 'view_module',
  },
  WARNING: {
    value: 'warning',
  },
  TWITTER: {
    value: 'twitter',
  },
  INSTAGRAM: {
    value: 'instagram',
  },
  LINKEDIN: {
    value: 'linkedin',
  },
  WEBSITE: {
    value: 'website',
  },
  YOUTUBE: {
    value: 'youtube',
  },
  PHONE: {
    value: 'phone',
  },
  FOLDER_SHARED: {
    value: 'folder_shared',
  },
});
