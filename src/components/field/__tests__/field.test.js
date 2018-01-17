/* eslint-env jest */
import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';

import Input from 'components/input';

import Field from '../field';

describe('components/field', () => {
  describe('Field (default)', () => {
    it('should render as expected', () => {
      const component = (
        <Field label="My Label" hint="My Hint">
          <Input value="My Input Value" />
        </Field>
      );
      const result = shallow(component);
      expect(result.html()).toMatch(/My Label/);
      expect(result.html()).toMatch(/My Hint/);
      expect(result.find(Input).is({value: 'My Input Value'})).toBe(true);
    });
  });
});
