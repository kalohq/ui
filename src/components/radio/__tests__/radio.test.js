/* @flow */
/* eslint-env mocha */
import expect from 'expect';
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import Radio from 'components/radio';

describe('components/radio', () => {

  describe('Radio', () => {

    const create = testComponent(Radio, () => ({
      size: 'medium',
      checked: true,
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result).toExist('should render OK');
    });

  });

});
