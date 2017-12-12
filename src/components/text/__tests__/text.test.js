/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import Text from 'components/text';

expect.addSnapshotSerializer(serializer(sheet));

describe('Text', () => {
  const defaultProps = {
    size: 'medium',
    color: 'charcoal',
  };
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Text {...defaultProps} {...props}>
            Hello World
          </Text>
        </ThemeProvider>
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
