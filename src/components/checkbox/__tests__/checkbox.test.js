/* @flow */
/* eslint-env jest */
import {shallow} from 'enzyme';
import {textMatch} from 'utils/test/enzyme';
import {testComponent} from 'utils/test/react';

import Checkbox from '../checkbox';

describe('components/checkbox', () => {
  describe('Checkbox', () => {
    const create = testComponent(Checkbox, () => ({
      size: 'medium',
      checked: true,
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result).toBeTruthy();
    });

    it('should render a checkbox with label', () => {
      const {element} = create({
        label: 'A checkbox label',
      });

      const result = shallow(element);
      const label = result.find('Text');
      expect(textMatch(label, 'A checkbox label')).toBe(true);
    });

    it('should render a checkbox partially checked', () => {
      const {element} = create({
        label: 'A checkbox label',
        checked: false,
        indeterminate: true,
      });
      const result = shallow(element);
      expect(result).toBeTruthy();
      const box = result.find('Box').first();
      expect(box.prop('className')).toBe('checkbox indeterminate');
    });
  });
});
