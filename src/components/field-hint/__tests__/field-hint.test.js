/* @flow */
/* eslint-env jest */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import FieldHint from '../field-hint';

describe('components/field-hint', () => {
  describe('FieldHint', () => {
    const create = testComponent(FieldHint, () => ({
      // insert your default props here ...
    }));

    it('should render shallow component ok', () => {
      const {element} = create({
        // insert test specific props here ...
        children: 'Child',
      });
      const result = shallow(element);
      expect(result).toExist('should render OK');
    });
  });
});
