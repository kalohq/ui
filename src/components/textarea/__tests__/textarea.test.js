/* @flow */
/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from '../../theme';
import Textarea from '../textarea';

describe('Input', () => {
  const defaultProps = {
    size: 'medium',
    theme: 'default',
  };

  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Textarea {...defaultProps} />
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });
});
