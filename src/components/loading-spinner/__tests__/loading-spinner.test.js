/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';

import LoadingSpinner from 'components/loading-spinner';

expect.addSnapshotSerializer(serializer(sheet));

describe('LoadingSpinner', () => {
  const defaultProps = {
    size: 'medium',
  };
  const create = (props = {}) =>
    renderer.create(<LoadingSpinner {...defaultProps} {...props} />).toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should render a large spinner', () => {
    const element = create({
      size: 'large',
    });
    expect(element).toMatchSnapshot();
  });
});
