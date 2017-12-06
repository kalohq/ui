/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';

import Paper from 'components/paper';

expect.addSnapshotSerializer(serializer(sheet));

describe('Paper', () => {
  const defaultProps = {};
  const create = (props = {spacing: true}) =>
    renderer.create(<Paper {...defaultProps} {...props} />).toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should render a component with an elevation of 3', () => {
    const element = create({
      elevation: 3,
    });
    expect(element).toMatchSnapshot();
  });
});
