/* @flow */
/* eslint-env mocha */
import expect from 'expect';
import {shallow} from 'enzyme';
import {textMatch} from 'utils/test/enzyme';
import {testComponent} from 'utils/test/react';

import Checkbox from '../checkbox';
import Text from 'components/text'

describe('components/checkbox', () => {

  describe('Checkbox', () => {

    const create = testComponent(Checkbox, () => ({
      size: 'medium',
      checked: true,
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result).toExist('should render OK');
    });

    it('should render a checkbox with label', () => {
      const {element} = create({
        label: 'A checkbox label',
      });
      const result = shallow(element);
      const label = result.find(Text);
      expect(textMatch(label, 'A checkbox label')).toBe(true);
    });

  });

});
