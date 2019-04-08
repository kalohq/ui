/* @flow */
/* eslint-env jest */
import * as React from 'react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';

import Paper from 'components/paper';
import {PaperToolbar} from '../components/paper-toolbar.react';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('components/paper', () => {
  describe('Paper', () => {
    const defaultProps = {};
    const create = (props = {spacing: true}) =>
      renderer
        .create(
          <ThemeProvider theme={theme}>
            <Paper {...defaultProps} {...props}>
              Paper Contents
            </Paper>
          </ThemeProvider>
        )
        .toJSON();

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

  describe('PaperToolbar', () => {
    test('should render shallow component ok', () => {
      const element = renderer.create(
        <ThemeProvider theme={theme}>
          <PaperToolbar>
            <Paper>Toolbar child contents</Paper>
          </PaperToolbar>
        </ThemeProvider>
      );
      expect(element).toMatchSnapshot();
    });
  });
});
