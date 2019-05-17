/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import Textarea from '../';

describe('Input', () => {
  const defaultProps = {
    size: 'medium',
    theme: 'default',
  };

  test('should render shallow component ok', () => {
    const element = renderer.create(<Textarea {...defaultProps} />).toJSON();
    expect(element).toMatchSnapshot();
  });
});
