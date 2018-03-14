/* @flow */
/* eslint-env jest */

import {returnArray} from '../array';

describe('utils/array', () => {
  describe('returnArray', () => {
    it('should return an array if passed value is not an array', () => {
      const passedValue = 'ABC';
      expect(Array.isArray(returnArray(passedValue))).toBe(true);
    });

    it('should return an array if passed value is an array', () => {
      const passedValue = ['A', 'B', 'C'];
      expect(Array.isArray(returnArray(passedValue))).toBe(true);
    });
  });
});
