/* @flow */
/* eslint-env mocha */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';
import CustomIcon from '../custom-icon';

describe('components/custom-icon', () => {
  describe('CustomIcon', () => {
    const create = testComponent(CustomIcon, () => ({}));

    it('should render shallow component ok', () => {
      const {element} = create({
        children: 'listed',
        size: 120,
      });
      const result = shallow(element);
      expect(result).toExist();
    });
  });
});
