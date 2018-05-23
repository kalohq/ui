/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {random} from 'lodash';
import {ThemeProvider} from 'emotion-theming';

import theme from '../../theme';

import Select, {Option} from '../';

const defaultProps = {};

const OPTIONS = ['Hertfordshire', 'Bedfordshire', 'Oxfordshire', 'Hampshire'];

describe('Select', () => {
  const create = props =>
    shallow(
      <ThemeProvider theme={theme}>
        <Select {...defaultProps} {...props}>
          {OPTIONS.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </ThemeProvider>
    );

  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Select {...defaultProps}>
            {OPTIONS.map(option => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render a disabled select', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Select {...defaultProps} disabled={true}>
            {OPTIONS.map(option => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render a readonly select', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Select {...defaultProps} readonly={true}>
            {OPTIONS.map(option => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should pass all unrecognized props on to the root Block', () => {
    const marginTop = random(10, 20);
    const element = create({marginTop});
    expect(element.props().marginTop).toBe(marginTop);
  });
});
