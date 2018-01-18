/* @flow */
/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import Fieldset from '../fieldset';

expect.addSnapshotSerializer(serializer);

describe('components/fieldset', () => {
  describe('Fieldset (default)', () => {
    const create = (spread = {}) => {
      const props = {
        // (insert your default props here)
        ...spread,
      };
      const element = <Fieldset {...props} />;
      return {props, element};
    };

    it('should shallow render as expected', () => {
      const {element} = create({
        // (insert test specific props here)
        children: 'Child',
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });
  });
});
