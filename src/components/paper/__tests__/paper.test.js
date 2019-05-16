/* eslint-env jest */
import * as React from 'react';
import renderer from 'react-test-renderer';

import Paper from 'components/paper';
import {PaperToolbar} from '../components/paper-toolbar.react';

describe('components/paper', () => {
  describe('Paper', () => {
    const defaultProps = {};
    const create = (props = {spacing: true}) =>
      renderer
        .create(
          <Paper {...defaultProps} {...props}>
            Paper Contents
          </Paper>
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
        <PaperToolbar>
          <Paper>Toolbar child contents</Paper>
        </PaperToolbar>
      );
      expect(element).toMatchSnapshot();
    });
  });
});
