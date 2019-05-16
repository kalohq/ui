import {capitalize} from 'lodash';

/** Get the first name from a potentially multi word string */
export function firstName(name) {
  return !!name ? capitalize(name.split(' ')[0]) : '';
}

/** Turn a string into a url friendly slug */
export function slugify(string) {
  return string
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, ''); // remove leading, trailing -
}

/** Remove extraneous whitespace and newlines from a string */
export function inline(str, replace = ' ') {
  return str.replace(/[\s]+/g, replace).trim();
}

export function pluralize(size, str, plural = 's', singular = '') {
  return Math.abs(size) === 1 ? `${str}${singular}` : `${str}${plural}`;
}
