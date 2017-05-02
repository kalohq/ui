/* eslint-env mocha */
import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {inline} from 'utils/string';
import proxyquire from 'proxyquire';
import {Flex} from 'components/layout';

const styles = {
  mayGetLong: 'mayGetLong',
};
const {default: Button} = proxyquire('../button', {
  './button.css': styles,
});

describe('components/button', () => {
  describe('Button (default)', () => {
    const newButton = props => shallow(<Button {...props} />);

    it(inline(`
      should trim the message if it overflows when \`mayGetLong\` is true
    `), () => {
      const wrapper = newButton({
        mayGetLong: true,
        children: 'MY_MESSAGE',
      });
      const message = wrapper.find(Flex).filter({name: 'message'});

      expect(message.props().className.split(/\s+/)).toContain(styles.mayGetLong);
      expect(message.props().title).toBe('MY_MESSAGE');
    });
  });
});
