import {isNumber} from 'lodash';

/**
 * Return the size of an array-like-iterable object (arrays or immutable iterables)
 * @param obj
 * @returns Number
 */
export function size(obj) {
  if (obj && isNumber(obj.size)) {
    return obj.size;
  }

  if (obj && isNumber(obj.length)) {
    return obj.length;
  }

  return 0;
}
