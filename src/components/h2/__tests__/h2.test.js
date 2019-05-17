/* @flow */
/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import H2 from 'components/h2';

describe('H2', () => {
  const defaultProps = {};
  const create = (props = {}) =>
    renderer
      .create(
        <H2 {...defaultProps} {...props}>
          An H2 Tag
        </H2>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should allow weight to be overridden', () => {
    const element = create({
      weight: 'light',
    });
    expect(element).toMatchSnapshot();
  });
});
