/* @flow */
/* eslint-env jest */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import FieldValidations from '../field-validations';
import FieldValidation from '../../field-validation';

describe('components/field-validations', () => {
  describe('FieldValidations', () => {
    const create = testComponent(FieldValidations, () => ({
      validations: [
        {
          message: 'Email can’t be empty',
        },
        {
          message: 'Email must be of email type',
        },
      ],
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result).toExist('should render OK');
    });

    it('should render two validation components', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result.find(FieldValidation).length).toEqual(2);
    });
  });
});
