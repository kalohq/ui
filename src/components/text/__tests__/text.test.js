/* @flow */
/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import Text from 'components/text';

describe('Text', () => {
  const defaultProps = {
    size: 'medium',
    color: 'charcoal',
  };
  const create = (props = {}) =>
    renderer
      .create(
        <Text {...defaultProps} {...props}>
          Hello World
        </Text>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should render green text', () => {
    const element = create({color: 'green'});
    expect(element).toMatchSnapshot();
  });

  test('should render large text', () => {
    const element = create({size: 'large'});
    expect(element).toMatchSnapshot();
  });
});
