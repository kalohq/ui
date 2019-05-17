/* @flow */
/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import H4 from 'components/h4';

describe('H4', () => {
  const defaultProps = {};
  const create = (props = {}) =>
    renderer
      .create(
        <H4 {...defaultProps} {...props}>
          An H4 Tag
        </H4>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should allow size to be overridden', () => {
    const element = create({
      size: 'large',
    });
    expect(element).toMatchSnapshot();
  });
});
