/* @flow */
/* eslint-env jest */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import Form from '../form';

describe('components/form', () => {
  describe('Form', () => {
    const create = testComponent(Form, () => ({
      actions: [],
    }));

    it('should render OK', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result).toExist('should render OK');
    });
  });
});
