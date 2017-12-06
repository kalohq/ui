/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';

import Radio from 'components/radio';

expect.addSnapshotSerializer(serializer(sheet));

describe('Radio', () => {
  const defaultProps = {
    size: 'medium',
    checked: true,
  };
  const create = (props = {}) =>
    renderer.create(<Radio {...defaultProps} {...props} />).toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });
});
