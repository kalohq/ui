/* @flow */
/* eslint-env jest */
import expect from 'expect';
import {shallow} from 'enzyme';
import {textMatch} from 'utils/test/enzyme';
import {testComponent} from 'utils/test/react';

import FieldLabel from '../field-label';
import Text from '../../text';
import Icon from '../../icon';

describe('components/field-label', () => {
  describe('FieldLabel', () => {
    const create = testComponent(FieldLabel, () => ({
      htmlFor: 'user-email',
      children: 'Your email',
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result).toExist('should render OK');
    });

    it('should render with a required asterisk', () => {
      const {element} = create({
        required: true,
      });
      const result = shallow(element);
      const label = result.find(Text);
      expect(textMatch(label, 'Your email *')).toBe(true);
    });

    it('should render with a locked icon', () => {
      const {element} = create({
        locked: true,
      });
      const result = shallow(element);
      expect(result.find(Icon).length).toBe(1);
    });
  });
});
