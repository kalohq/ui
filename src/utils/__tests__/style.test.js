/* eslint-env jest */

import {parseStyleProps} from '../style';

describe('utlis/style', () => {
  describe('parseStyleProps', () => {
    it('should properly filter styles', () => {
      const originalProps = {
        foo: 'bar',
        asd: {qwe: 123},
        margin: '10px',
        style: {
          display: 'flex',
        },
      };

      expect(parseStyleProps(originalProps)).toEqual({
        props: {
          asd: {
            qwe: 123,
          },
          foo: 'bar',
        },
        style: {
          display: 'flex',
          margin: '10px',
        },
      });
    });

    it('should extend prop style', () => {
      const originalProps = {
        foo: 'bar',
        asd: {qwe: 123},
        margin: '10px',
      };

      expect(parseStyleProps(originalProps)).toEqual({
        props: {
          asd: {
            qwe: 123,
          },
          foo: 'bar',
        },
        style: {
          margin: '10px',
        },
      });
    });
  });
});
