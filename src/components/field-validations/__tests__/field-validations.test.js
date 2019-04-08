/* @flow */
/* eslint-env jest */
import {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import FieldValidations from '../';
import FieldValidation from '../../field-validation';

describe('FieldValidations', () => {
  const defaultProps = {
    validations: [
      {
        message: 'Email can’t be empty',
      },
      {
        message: 'Email must be of email type',
      },
    ],
  };
  const create = props => <FieldValidations {...defaultProps} {...props} />;

  test('should render shallow component ok', () => {
    const element = renderer.create(<FieldValidations />).toJSON();
    expect(element).toMatchSnapshot();
  });

  it('should render two validation components', () => {
    const element = create();
    const result = shallow(element);
    expect(result.find(FieldValidation).length).toEqual(2);
  });
});
