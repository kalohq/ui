/* eslint-env node, jest */
/* eslint func-names: 0 */
import {getFixedOffset} from '../dom';

describe('utils/dom', () => {
  describe('getFixedOffset', () => {
    it('should handle null elements gracefully', () => {
      expect(getFixedOffset(null)).toEqual({top: 0, left: 0});
    });
  });
});
