/* @flow */
/* eslint-env jest */
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';
import serializer from 'enzyme-to-json/serializer';

import Checkbox from '../checkbox';

expect.addSnapshotSerializer(serializer);

describe('components/checkbox', () => {
  describe('Checkbox', () => {
    const create = testComponent(Checkbox, () => ({
      size: 'medium',
      checked: true,
    }));

    it('should render shallow component ok', () => {
      const {element} = create();
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });

    it('should render a checkbox with label', () => {
      const {element} = create({
        label: 'A checkbox label',
      });

      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });

    it('should render a checkbox partially checked', () => {
      const {element} = create({
        label: 'A checkbox label',
        checked: false,
        indeterminate: true,
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });
  });
});
