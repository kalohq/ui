/* eslint-env node, jest */

import Enum from '../enum';

describe('utils/enum', () => {
  describe('Enum (default)', () => {
    it('should consume a spec and provide enum', () => {
      const enumA = new Enum({
        FIXED: {
          value: 'fixed',
          name: 'Fixed',
        },
        HOURLY: {
          value: 'hourly',
          name: 'Hourly',
        },
        DAILY: 'daily',
      });

      expect(enumA.FIXED).toBe('fixed');
      expect(enumA.HOURLY).toBe('hourly');
      expect(enumA.DAILY).toBe('daily');
      expect(enumA.values).toEqual(['fixed', 'hourly', 'daily']);
      expect(enumA.properties).toEqual({
        fixed: {value: 'fixed', name: 'Fixed'},
        hourly: {value: 'hourly', name: 'Hourly'},
        daily: {value: 'daily'},
      });
    });

    it('should support a shorthand array spec', () => {
      const enumA = new Enum(['FIXED', 'HOURLY', 'DAILY']);

      expect(enumA.FIXED).toBe('FIXED');
      expect(enumA.HOURLY).toBe('HOURLY');
      expect(enumA.DAILY).toBe('DAILY');
      expect(enumA.values).toEqual(['FIXED', 'HOURLY', 'DAILY']);
      expect(enumA.properties).toEqual({
        FIXED: {value: 'FIXED'},
        HOURLY: {value: 'HOURLY'},
        DAILY: {value: 'DAILY'},
      });
    });

    it('should be iterable', () => {
      const enumA = new Enum({
        a: 1,
        b: 2,
        c: 3,
      });

      const values = [...enumA];
      expect(values[0]).toBe(1);
      expect(values[1]).toBe(2);
      expect(values[2]).toBe(3);

      const valuesB = [];
      for (const val of enumA) {
        valuesB.push(val);
      }
      expect(valuesB[0]).toBe(1);
      expect(valuesB[1]).toBe(2);
      expect(valuesB[2]).toBe(3);
    });

    it('should throw if duplicate values are passed', () => {
      const makeEnum = () =>
        new Enum({
          a: 1,
          b: 1,
        });

      expect(makeEnum).toThrow();
    });

    describe('Enum.withValues', () => {
      it('should consume a value source and spec to create full enum with properties and values', () => {
        const values = {
          FIXED: {value: 'fixed'},
          HOURLY: {value: 'hourly'},
          DAILY: 'daily',
        };

        const enumA = Enum.withValues(values, {
          FIXED: {name: 'Fixed'},
          HOURLY: {name: 'Hourly'},
          DAILY: {name: 'Daily'},
        });

        expect(enumA.FIXED).toBe('fixed');
        expect(enumA.HOURLY).toBe('hourly');
        expect(enumA.DAILY).toBe('daily');
        expect(enumA.values).toEqual(['fixed', 'hourly', 'daily']);
        expect(enumA.properties).toEqual({
          fixed: {value: 'fixed', name: 'Fixed'},
          hourly: {value: 'hourly', name: 'Hourly'},
          daily: {value: 'daily', name: 'Daily'},
        });
      });
    });
  });
});
