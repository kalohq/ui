/* @flow */
/* eslint-env jest */
import * as React from 'react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import H2 from 'components/h2';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('H2', () => {
  const defaultProps = {};
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <H2 {...defaultProps} {...props}>
            An H2 Tag
          </H2>
        </ThemeProvider>
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
