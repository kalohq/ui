/* @flow */
/* eslint-env mocha */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';
import Button from 'components/button';
import Icon from 'components/icon';

import Exports from '../primary-action-button';

describe('components/primary-action-button', () => {

  describe('Exports', () => {

    const create = testComponent(Exports, () => ({}));

    it('should render a button with an icon', () => {
      const {element} = create({
        icon: 'bleep',
      });
      const result = shallow(element);
      expect(result.find(Button).prop('size')).toBe('medium');
      expect(result.find(Icon).prop('children')).toBe('bleep');
    });

    it('should pass on all unknown props to the button', () => {
      const onClick = () => {};
      const {element} = create({onClick});
      const result = shallow(element);
      expect(result.find(Button).prop('onClick')).toBe(onClick);
    });

  });

});
