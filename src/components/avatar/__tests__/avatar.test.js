/* eslint-env jest */
import * as React from 'react';
import {mount} from '../../../utils/test/enzyme';

import Avatar, {getFallbackColor} from '../avatar';

describe('Avatar', () => {
  test('should render an avatar', () => {
    const element = <Avatar size="medium" initials="TP" />;

    const result = mount(element);
    expect(result.length).toBe(1);
  });

  test('should pass fallback initials through to the underlying DOM element', () => {
    const element = <Avatar size="large" initials="TP" />;

    const result = mount(element);
    expect(
      result.find('span.ui-avatar[data-fallback-initials="TP"]').length
    ).toBe(1);
  });

  describe('getFallbackColor()', () => {
    test('should consistently return a color based on a given string', () => {
      const result = getFallbackColor('test@example.com'); // blue
      const result2 = getFallbackColor('test@example.com'); // blue
      const result3 = getFallbackColor('bob@example.com'); // navy
      const result4 = getFallbackColor('bob@example.com'); // navy

      expect(result).toBe(result2);
      expect(result3).toBe(result4);
    });
  });
});
