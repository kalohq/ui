/* @flow */

import Enum from '../../utils/enum';

import type {TEXT_COLOR} from '../text/constants';

export type ICON_SIZE = 12 | 14 | 16 | 18 | 20 | 23 | 24 | 26 | 36 | 48;
export type ICON_COLOR = TEXT_COLOR;

export const DEFAULT_SIZE = 16;
export const DEFAULT_COLOR = 'currentColor';

const CATEGORIES = {
  status: {
    value: 'status',
  },
  social: {
    value: 'social',
  },
  misc: {
    value: 'misc',
  },
};

export const ICONS = new Enum({
  ACCESS_TIME: {
    value: 'access_time',
    category: CATEGORIES.status,
  },
  ACCOUNT_BALANCE: {
    value: 'account_balance',
    category: CATEGORIES.misc,
  },
  ACCOUNT_BALANCE_WALLET: {
    value: 'account_balance_wallet',
    category: CATEGORIES.misc,
  },
  ACCOUNT_BOX: {
    value: 'account_box',
    category: CATEGORIES.misc,
  },
  ACCOUNT_CIRCLE: {
    value: 'account_circle',
    category: CATEGORIES.misc,
  },
  ADD: {
    value: 'add',
    category: CATEGORIES.misc,
  },
  ADD_A_PHOTO: {
    value: 'add_a_photo',
    category: CATEGORIES.misc,
  },
  ARCHIVE: {
    value: 'archive',
    category: CATEGORIES.misc,
  },
  ARROW_DROP_DOWN: {
    value: 'arrow_drop_down',
    category: CATEGORIES.misc,
  },
  ARROW_DROP_DOWN_CIRCLE: {
    value: 'arrow_drop_down_circle',
    category: CATEGORIES.misc,
  },
  ARROW_DROP_UP: {
    value: 'arrow_drop_up',
    category: CATEGORIES.misc,
  },
  ART_TRACK: {
    value: 'art_track',
    category: CATEGORIES.misc,
  },
  ASSIGNMENT: {
    value: 'assignment',
    category: CATEGORIES.misc,
  },
  ASSIGNMENT_IND: {
    value: 'assignment_ind',
    category: CATEGORIES.misc,
  },
  ATTACH_FILE: {
    value: 'attach_file',
    category: CATEGORIES.misc,
  },
  ATTACH_MONEY: {
    value: 'attach_money',
    category: CATEGORIES.misc,
  },
  AUTORENEW: {
    value: 'autorenew',
    category: CATEGORIES.misc,
  },
  BOOK: {
    value: 'book',
    category: CATEGORIES.misc,
  },
  BORDER_COLOR: {
    value: 'border_color',
    category: CATEGORIES.misc,
  },
  CHAT: {
    value: 'chat',
    category: CATEGORIES.misc,
  },
  CHECK: {
    value: 'check',
    category: CATEGORIES.misc,
  },
  CHECK_BOX: {
    value: 'check_box',
    category: CATEGORIES.misc,
  },
  CHECK_BOX_OUTLINE_BLANK: {
    value: 'check_box_outline_blank',
    category: CATEGORIES.misc,
  },
  CHECK_CIRCLE: {
    value: 'check_circle',
    category: CATEGORIES.misc,
  },
  CHEVRON_LEFT: {
    value: 'chevron_left',
    category: CATEGORIES.misc,
  },
  CHEVRON_RIGHT: {
    value: 'chevron_right',
    category: CATEGORIES.misc,
  },
  CLEAR: {
    value: 'clear',
    category: CATEGORIES.misc,
  },
  CLOSE: {
    value: 'close',
    category: CATEGORIES.misc,
  },
  COMMENT: {
    value: 'comment',
    category: CATEGORIES.misc,
  },
  CONTENT_PASTE: {
    value: 'content_paste',
    category: CATEGORIES.status,
  },
  CREATE: {
    value: 'create',
    category: CATEGORIES.misc,
  },
  CREDIT_CARD: {
    value: 'credit_card',
    category: CATEGORIES.misc,
  },
  DATE_RANGE: {
    value: 'date_range',
    category: CATEGORIES.misc,
  },
  DELETE: {
    value: 'delete',
    category: CATEGORIES.misc,
  },
  DOMAIN: {
    value: 'domain',
    category: CATEGORIES.misc,
  },
  DONE: {
    value: 'done',
    category: CATEGORIES.misc,
  },
  DONE_ALL: {
    value: 'done_all',
    category: CATEGORIES.status,
  },
  DRIBBBLE: {
    value: 'dribbble',
    category: CATEGORIES.social,
  },
  EDIT: {
    value: 'edit',
    category: CATEGORIES.misc,
  },
  EMAIL: {
    value: 'email',
    category: CATEGORIES.misc,
  },
  ERROR_OUTLINE: {
    value: 'error_outline',
    category: CATEGORIES.status,
  },
  EXIT_TO_APP: {
    value: 'exit_to_app',
    category: CATEGORIES.misc,
  },
  EXTENSION: {
    value: 'extension',
    category: CATEGORIES.misc,
  },
  FILE_UPLOAD: {
    value: 'file_upload',
    category: CATEGORIES.misc,
  },
  FOLDER_SHARED: {
    value: 'folder_shared',
    category: CATEGORIES.misc,
  },
  GLOBE: {
    value: 'globe',
    category: CATEGORIES.misc,
  },
  GROUP: {
    value: 'group',
    category: CATEGORIES.misc,
  },
  HELP_OUTLINE: {
    value: 'help_outline',
    category: CATEGORIES.misc,
  },
  HIGHLIGHT_OFF: {
    value: 'highlight_off',
    category: CATEGORIES.misc,
  },
  INFO: {
    value: 'info',
    category: CATEGORIES.misc,
  },
  INFO_OUTLINE: {
    value: 'info_outline',
    category: CATEGORIES.misc,
  },
  INSERT_DRIVE_FILE: {
    value: 'insert_drive_file',
    category: CATEGORIES.misc,
  },
  INSTAGRAM: {
    value: 'instagram',
    category: CATEGORIES.social,
  },
  KEYBOARD_ARROW_DOWN: {
    value: 'keyboard_arrow_down',
    category: CATEGORIES.misc,
  },
  KEYBOARD_ARROW_LEFT: {
    value: 'keyboard_arrow_left',
    category: CATEGORIES.misc,
  },
  KEYBOARD_ARROW_RIGHT: {
    value: 'keyboard_arrow_right',
    category: CATEGORIES.misc,
  },
  KEYBOARD_ARROW_UP: {
    value: 'keyboard_arrow_up',
    category: CATEGORIES.misc,
  },
  KEYBOARD_RETURN: {
    value: 'keyboard_return',
    category: CATEGORIES.misc,
  },
  LAUNCH: {
    value: 'launch',
    category: CATEGORIES.misc,
  },
  LINK: {
    value: 'link',
    category: CATEGORIES.misc,
  },
  LINKEDIN: {
    value: 'linkedin',
    category: CATEGORIES.social,
  },
  LOCAL_ATM: {
    value: 'local_atm',
    category: CATEGORIES.status,
  },
  LOCAL_OFFER: {
    value: 'local_offer',
    category: CATEGORIES.misc,
  },
  LOCATION_CITY: {
    value: 'location_city',
    category: CATEGORIES.misc,
  },
  LOCATION_ON: {
    value: 'location_on',
    category: CATEGORIES.misc,
  },
  LOCK: {
    value: 'lock',
    category: CATEGORIES.misc,
  },
  LOOP: {
    value: 'loop',
    category: CATEGORIES.status,
  },
  MAIL: {
    value: 'mail',
    category: CATEGORIES.misc,
  },
  MESSAGE: {
    value: 'message',
    category: CATEGORIES.misc,
  },
  MODE_EDIT: {
    value: 'mode_edit',
    category: CATEGORIES.misc,
  },
  MONETIZATION_ON: {
    value: 'monetization_on',
    category: CATEGORIES.misc,
  },
  MORE_VERT: {
    value: 'more_vert',
    category: CATEGORIES.misc,
  },
  NOTE_ADD: {
    value: 'note_add',
    category: CATEGORIES.misc,
  },
  NOTIFICATIONS: {
    value: 'notifications',
    category: CATEGORIES.misc,
  },
  OPEN_IN_NEW: {
    value: 'open_in_new',
    category: CATEGORIES.misc,
  },
  PAYMENT: {
    value: 'payment',
    category: CATEGORIES.misc,
  },
  PEOPLE: {
    value: 'people',
    category: CATEGORIES.misc,
  },
  PERM_CONTACT_CALENDAR: {
    value: 'perm_contact_calendar',
    category: CATEGORIES.misc,
  },
  PERM_IDENTITY: {
    value: 'perm_identity',
    category: CATEGORIES.misc,
  },
  PERSON: {
    value: 'person',
    category: CATEGORIES.misc,
  },
  PERSON_ADD: {
    value: 'person_add',
    category: CATEGORIES.misc,
  },
  PERSON_OUTLINE: {
    value: 'person_outline',
    category: CATEGORIES.misc,
  },
  PHONE: {
    value: 'phone',
    category: CATEGORIES.misc,
  },
  PICTURE_AS_PDF: {
    value: 'picture_as_pdf',
    category: CATEGORIES.misc,
  },
  PLAYLIST_ADD_CHECK: {
    value: 'playlist_add_check',
    category: CATEGORIES.misc,
  },
  PRESENT_TO_ALL: {
    value: 'present_to_all',
    category: CATEGORIES.misc,
  },
  RADIO_BUTTON_CHECKED: {
    value: 'radio_button_checked',
    category: CATEGORIES.misc,
  },
  RECEIPT: {
    value: 'receipt',
    category: CATEGORIES.misc,
  },
  REMOVE: {
    value: 'remove',
    category: CATEGORIES.misc,
  },
  REMOVE_CIRCLE: {
    value: 'remove_circle',
    category: CATEGORIES.misc,
  },
  REMOVE_RED_EYE: {
    value: 'remove_red_eye',
    category: CATEGORIES.misc,
  },
  SEARCH: {
    value: 'search',
    category: CATEGORIES.misc,
  },
  SECURITY: {
    value: 'security',
    category: CATEGORIES.misc,
  },
  SEND: {
    value: 'send',
    category: CATEGORIES.status,
  },
  SETTINGS: {
    value: 'settings',
    category: CATEGORIES.misc,
  },
  SHORT_TEXT: {
    value: 'short_text',
    category: CATEGORIES.misc,
  },
  STAR: {
    value: 'star',
    category: CATEGORIES.misc,
  },
  SWAP_VERT: {
    value: 'swap_vert',
    category: CATEGORIES.misc,
  },
  TV: {
    value: 'tv',
    category: CATEGORIES.misc,
  },
  TWITTER: {
    value: 'twitter',
    category: CATEGORIES.social,
  },
  VERIFIED_USER: {
    value: 'verified_user',
    category: CATEGORIES.misc,
  },
  VIEW_HEADLINE: {
    value: 'view_headline',
    category: CATEGORIES.misc,
  },
  VIEW_MODULE: {
    value: 'view_module',
    category: CATEGORIES.misc,
  },
  VIEW_WEEK: {
    value: 'view_week',
    category: CATEGORIES.misc,
  },
  WARNING: {
    value: 'warning',
    category: CATEGORIES.misc,
  },
  WEBSITE: {
    value: 'website',
    category: CATEGORIES.misc,
  },
  YOUTUBE: {
    value: 'youtube',
    category: CATEGORIES.social,
  },
});
