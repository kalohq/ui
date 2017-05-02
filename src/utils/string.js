/* @flow */
import {capitalize} from 'lodash';

/** Get the first name from a potentially multi word string */
export function firstName(name: string): string {
  return !!name ? capitalize(name.split(' ')[0]) : '';
}

/** Turn a string into a url friendly slug */
export function slugify(string: string): string {
  return string
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, ''); // remove leading, trailing -
}

/** Remove extraneous whitespace and newlines from a string */
export function inline(str: string, replace: string = ' '): string {
  return str.replace(/[\s]+/g, replace).trim();
}

export function pluralize(size: number, str: string, plural: string = 's', singular: string = ''): string {
  return size > 1
    ? `${str}${plural}`
    : `${str}${singular}`;
}
