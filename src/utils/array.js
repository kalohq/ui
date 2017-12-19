/* @flow */

/** Checks if a value is an array, if not, returns the value wrapped in one */
export const returnArray = (value: any): Array<mixed> =>
  Array.isArray(value) ? value : [value];
