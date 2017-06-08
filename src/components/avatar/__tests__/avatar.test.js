/* @flow */
/* eslint-env mocha */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import Avatar, {AvatarImage, AvatarBadge} from '../avatar';

const _src = '//wherever.com/record.png';
const _subRecordSrc = '//wherever.com/subrecord.png';

describe('components/avatar', () => {
  describe('Avatar', () => {
    const create = testComponent(Avatar, () => ({
      size: 'medium',
      src: _src,
      record: 'Bob Smith',
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result.find(AvatarImage).prop('src')).toBe(_src);
    });

    it('should render a subRecord badge when passed to it', () => {
      const {props, element} = create({
        subRecord: 'Alex Pate',
        subRecordSrc: _subRecordSrc,
      });

      const result = shallow(element);
      expect(result.find(AvatarImage).props().src).toBe(_src);
      expect(result.find(Avatar).length).toBe(1);
      expect(result.find(Avatar).props().record).toBe(props.subRecord);
    });

    it('should render a listed badge if confirmed', () => {
      const {element} = create({
        confirmed: true,
        size: 'small',
      });
      const result = shallow(element);
      expect(result.find(AvatarBadge).prop('icon')).toBe('listed');
      result.setProps({size: 'large'});
      expect(result.find(AvatarBadge).prop('icon')).toBe('listed');
    });

    it('should only ever show two letters', () => {
      const {element} = create({
        record: 'Pablo Really Long Name Smith',
      });
      const result = shallow(element);
      expect(result.prop('data-initials')).toBe('PS');
    });
  });
});