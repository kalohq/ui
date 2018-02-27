/* @flow */
/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import StateTag from '../state-tag';

expect.addSnapshotSerializer(serializer);

describe('components/state-tag', () => {
  describe('StateTag (default)', () => {
    const create = (spread = {}) => {
      const props = {
        // (insert your default props here)
        ...spread,
      };
      const element = <StateTag {...props} />;
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
