/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';

import H1 from 'components/h1';

expect.addSnapshotSerializer(serializer(sheet));

describe('H1', () => {
  const defaultProps = {};
  const create = (props = {}) =>
    renderer
      .create(
        <H1 {...defaultProps} {...props}>
          An H1 Tag
        </H1>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should allow weight to be overridden', () => {
    const element = create({
      weight: 'medium',
    });
    expect(element).toMatchSnapshot();
  });
});
