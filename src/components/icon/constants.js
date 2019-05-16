import Enum from '../../utils/enum';

import {TEXT_COLOR} from '../text/constants';

export const ICON_SIZE = [12, 14, 16, 18, 20, 23, 24, 26, 36, 48];
export const ICON_COLOR = [...TEXT_COLOR, 'gradient-pink'];

export const DEFAULT_SIZE = 16;
export const DEFAULT_COLOR = 'currentColor';

const CATEGORIES = {
  status: {
    value: 'status',
  },
  social: {
    value: 'social',
  },
};

export const ICONS = new Enum({
  ACCESS_TIME: {
    value: 'access_time',
    category: CATEGORIES.status,
  },
  ACCOUNT_BALANCE: {
    value: 'account_balance',
  },
  ACCOUNT_BALANCE_WALLET: {
    value: 'account_balance_wallet',
  },
  ACCOUNT_BOX: {
    value: 'account_box',
  },
  ACCOUNT_CIRCLE: {
    value: 'account_circle',
  },
  ADD: {
    value: 'add',
  },
  ADD_A_PHOTO: {
    value: 'add_a_photo',
  },
  ARCHIVE: {
    value: 'archive',
  },
  ARROW_DROP_DOWN: {
    value: 'arrow_drop_down',
  },
  ARROW_DROP_DOWN_CIRCLE: {
    value: 'arrow_drop_down_circle',
  },
  ARROW_DROP_UP: {
    value: 'arrow_drop_up',
  },
  ART_TRACK: {
    value: 'art_track',
  },
  ASSIGNMENT: {
    value: 'assignment',
  },
  ASSIGNMENT_IND: {
    value: 'assignment_ind',
  },
  ATTACH_FILE: {
    value: 'attach_file',
  },
  ATTACH_MONEY: {
    value: 'attach_money',
  },
  AUTORENEW: {
    value: 'autorenew',
  },
  BOOK: {
    value: 'book',
  },
  BORDER_COLOR: {
    value: 'border_color',
  },
  CHAT: {
    value: 'chat',
  },
  CHECK: {
    value: 'check',
  },
  CHECK_BOX: {
    value: 'check_box',
  },
  CHECK_BOX_OUTLINE_BLANK: {
    value: 'check_box_outline_blank',
  },
  CHECK_CIRCLE: {
    value: 'check_circle',
  },
  CHECK_CIRCLE_OUTLINE: {
    value: 'check_circle_outline',
  },
  CHEVRON_LEFT: {
    value: 'chevron_left',
  },
  CHEVRON_RIGHT: {
    value: 'chevron_right',
  },
  CLEAR: {
    value: 'clear',
  },
  CLOSE: {
    value: 'close',
  },
  COMMENT: {
    value: 'comment',
  },
  CONTENT_PASTE: {
    value: 'content_paste',
    category: CATEGORIES.status,
  },
  CREATE: {
    value: 'create',
  },
  CREDIT_CARD: {
    value: 'credit_card',
  },
  DATE_RANGE: {
    value: 'date_range',
  },
  DELETE: {
    value: 'delete',
  },
  DOMAIN: {
    value: 'domain',
  },
  DONE: {
    value: 'done',
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
  },
  EMAIL: {
    value: 'email',
  },
  ERROR_OUTLINE: {
    value: 'error_outline',
    category: CATEGORIES.status,
  },
  EXIT_TO_APP: {
    value: 'exit_to_app',
  },
  EXTENSION: {
    value: 'extension',
  },
  FILE_UPLOAD: {
    value: 'file_upload',
  },
  FILE_XLS: {
    value: 'file_xls',
  },
  FOLDER_SHARED: {
    value: 'folder_shared',
  },
  FORMAT_COLOR_FILL: {
    value: 'format_color_fill',
  },
  GLOBE: {
    value: 'globe',
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
  HOW_TO_REG: {
    value: 'how_to_reg',
  },
  INFO: {
    value: 'info',
  },
  INFO_OUTLINE: {
    value: 'info_outline',
  },
  INSERT_DRIVE_FILE: {
    value: 'insert_drive_file',
  },
  INSTAGRAM: {
    value: 'instagram',
    category: CATEGORIES.social,
  },
  KALO_ADMIN: {
    value: 'kalo_admin',
  },
  KALO_CATEGORIES: {
    value: 'kalo_categories',
  },
  KALO_CLIENTS: {
    value: 'kalo_clients',
  },
  KALO_FINANCE: {
    value: 'kalo_finance',
  },
  KALO_INDEX: {
    value: 'kalo_index',
  },
  KALO_MESSAGES: {
    value: 'kalo_messages',
  },
  KALO_PREMIUM: {
    value: 'kalo_premium',
  },
  KALO_PROJECTS: {
    value: 'kalo_projects',
  },
  KALO_REPORTING: {
    value: 'kalo_reporting',
  },
  KALO_TASKS: {
    value: 'kalo_tasks',
  },
  KALO_VERIFIED: {
    value: 'kalo_verified',
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
  },
  LOCATION_CITY: {
    value: 'location_city',
  },
  LOCATION_ON: {
    value: 'location_on',
  },
  LOCK: {
    value: 'lock',
  },
  LOOP: {
    value: 'loop',
    category: CATEGORIES.status,
  },
  MAIL: {
    value: 'mail',
  },
  MEGAPHONE: {
    value: 'megaphone',
  },
  MESSAGE: {
    value: 'message',
  },
  MODE_EDIT: {
    value: 'mode_edit',
  },
  MONETIZATION_ON: {
    value: 'monetization_on',
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
  PAYMENT: {
    value: 'payment',
  },
  PEOPLE: {
    value: 'people',
  },
  PERM_CONTACT_CALENDAR: {
    value: 'perm_contact_calendar',
  },
  PERM_IDENTITY: {
    value: 'perm_identity',
  },
  PERSON: {
    value: 'person',
  },
  PERSON_ADD: {
    value: 'person_add',
  },
  PERSON_OUTLINE: {
    value: 'person_outline',
  },
  PHONE: {
    value: 'phone',
  },
  PICTURE_AS_PDF: {
    value: 'picture_as_pdf',
  },
  PLAYLIST_ADD_CHECK: {
    value: 'playlist_add_check',
  },
  PRESENT_TO_ALL: {
    value: 'present_to_all',
  },
  QUESTION_HELP_MESSAGE: {
    value: 'question_help_message',
  },
  RADIO_BUTTON_CHECKED: {
    value: 'radio_button_checked',
  },
  RECEIPT: {
    value: 'receipt',
  },
  REMOVE: {
    value: 'remove',
  },
  REMOVE_CIRCLE: {
    value: 'remove_circle',
  },
  REMOVE_RED_EYE: {
    value: 'remove_red_eye',
  },
  SEARCH: {
    value: 'search',
  },
  SECURITY: {
    value: 'security',
  },
  SEND: {
    value: 'send',
    category: CATEGORIES.status,
  },
  SETTINGS: {
    value: 'settings',
  },
  SHORT_TEXT: {
    value: 'short_text',
  },
  STAR: {
    value: 'star',
  },
  SWAP_VERT: {
    value: 'swap_vert',
  },
  TV: {
    value: 'tv',
  },
  TWITTER: {
    value: 'twitter',
    category: CATEGORIES.social,
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
  VIEW_WEEK: {
    value: 'view_week',
  },
  WARNING: {
    value: 'warning',
  },
  WEBSITE: {
    value: 'website',
  },
  YOUTUBE: {
    value: 'youtube',
    category: CATEGORIES.social,
  },
  RATES: {
    value: 'rates',
  },
});
