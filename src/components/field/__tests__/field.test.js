/* eslint-env jest */
import {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Field from '../field.react';
import Input from '../../input';

describe('Field', () => {
  const defaultProps = {
    label: 'My Label',
    hint: 'My Hint',
  };

  const create = props => (
    <Field {...defaultProps} {...props}>
      <Input value="My Input Value" />
    </Field>
  );

  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <Field {...defaultProps}>
          <Input value="My Input Value" />
        </Field>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });

  test('should render as expected', () => {
    const element = create();
    const result = shallow(element);
    expect(result.html()).toMatch(/My Label/);
    expect(result.html()).toMatch(/My Hint/);
    expect(result.find(Input).is({value: 'My Input Value'})).toBe(true);
  });

  test('should render with validations', () => {
    const element = create({
      validations: [
        {
          message: 'Your email was incorrect',
        },
      ],
    });
    const result = shallow(element);
    expect(result.html()).toMatch(/Your email was incorrect/);
  });
});
