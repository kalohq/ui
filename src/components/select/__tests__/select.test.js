/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import Select, {Option} from '../';

const defaultProps = {};

const OPTIONS = ['Hertfordshire', 'Bedfordshire', 'Oxfordshire', 'Hampshire'];

describe('Select', () => {
  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <Select {...defaultProps}>
          {OPTIONS.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render a disabled select', () => {
    const element = renderer
      .create(
        <Select {...defaultProps} disabled={true}>
          {OPTIONS.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render a readonly select', () => {
    const element = renderer
      .create(
        <Select {...defaultProps} readonly={true}>
          {OPTIONS.map(option => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });
});
