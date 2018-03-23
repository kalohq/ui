/* @flow */
/* eslint-env jest */
import * as React from 'react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import H4 from 'components/h4';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('H4', () => {
  const defaultProps = {};
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <H4 {...defaultProps} {...props}>
            An H4 Tag
          </H4>
        </ThemeProvider>
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
