/* @flow */
/* eslint-env jest */
import * as React from 'react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import H1 from 'components/h1';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('H1', () => {
  const defaultProps = {};
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <H1 {...defaultProps} {...props}>
            An H1 Tag
          </H1>
        </ThemeProvider>
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
