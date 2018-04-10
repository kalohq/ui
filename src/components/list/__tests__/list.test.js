/* @flow */
/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';

import List from '../list';
import Paper from '../../paper';

describe('components/list', () => {
  const create = (spread = {}) => {
    const props = {spaced: 'medium', ...spread};
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <List {...props}>
            <Paper>List Item One</Paper>
            <Paper>List Item Two</Paper>
            <Paper>List Item Three</Paper>
            <Paper>List Item Four</Paper>
          </List>
        </ThemeProvider>
      )
      .toJSON();

    return {props, element};
  };

  it('should shallow render as expected', () => {
    const {element} = create();
    const result = shallow(element);
    expect(result).toMatchSnapshot();
  });

  it('should render as a grid', () => {
    const {element} = create();
    const result = shallow(element);
    expect(result).toMatchSnapshot();
  });
});
