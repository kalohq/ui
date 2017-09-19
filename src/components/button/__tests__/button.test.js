/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import {inline} from 'utils/string';
import Button from '../button';

describe('components/button', () => {
  describe('Button (default)', () => {
    const newButton = props => shallow(<Button {...props} />);

    it(
      inline(`
      should trim the message if it overflows when \`mayGetLong\` is true
    `),
      () => {
        const wrapper = newButton({
          mayGetLong: true,
          children: 'MY_MESSAGE',
        });
        const message = wrapper.find('Flex').filter({name: 'message'});

        expect(message.props().className.split(/\s+/)).toContain('mayGetLong');
        expect(message.props().title).toBe('MY_MESSAGE');
      }
    );
  });
});
