/* @flow */
/* eslint-env mocha */
import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {inline} from 'utils/string';

import Input from 'components/input';

describe('components/input', () => {
  describe('Input (default)', () => {
    const newInput = (props) => {
      const wrapper = shallow(
        <Input
          {...props}
        />
      );
      const input = wrapper.find('input');
      const inputStyle = input.props().style;
      return {inputStyle};
    };

    it(inline(`
      should have a bottom border by default
    `), () => {
      const {inputStyle} = newInput();
      expect(inputStyle.borderBottomWidth).toBe('1px');
    });

    it(inline(`
      should have no bottom border if \`borderless\` is true
    `), () => {
      const {inputStyle} = newInput({borderless: true});
      expect(inputStyle.borderBottomWidth).toBe('0');
    });
  });
});
