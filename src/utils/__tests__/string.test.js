/* eslint-env jest */

import {inline, slugify, firstName, pluralize} from '../string';

describe('utils/string', () => {
  describe('firstName', () => {
    it('should grab the first name from a string', () => {
      expect(firstName('James Henry Spry-Leverton')).toBe('James');
      expect(firstName(undefined)).toBe('');
    });
  });

  describe('inline', () => {
    it('should parse string as expected', () => {
      expect(
        inline(
          `
        my  inline
        string
      `
        )
      ).toBe('my inline string');
    });
  });

  describe('slugify', () => {
    it('should convert a string into a slug', () => {
      expect(slugify('a_b_-_c_-_d')).toBe('a-b-c-d');
    });
  });

  describe('pluralize', () => {
    it('should render plural variant if the size is greater than one', () => {
      expect(pluralize(2, 'apple')).toBe('apples');
      expect(pluralize(1235, 'apple')).toBe('apples');
    });

    it('should render singular variant if the size is exactly one', () => {
      expect(pluralize(1, 'apple')).toBe('apple');
    });

    it('should render plural variant if the size is zero', () => {
      expect(pluralize(0, 'apple')).toBe('apples');
    });

    it('should handle negative numbers just like positive ones', () => {
      expect(pluralize(-1, 'apple')).toBe('apple');
      expect(pluralize(-2, 'apple')).toBe('apples');
    });

    it('should allow the custom of pluralisation', () => {
      expect(pluralize(4, 'apple', 'z')).toBe('applez');
      expect(pluralize(1, 'apple', 'z', 'wat?')).toBe('applewat?');
    });
  });
});
