/* @flow */
/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import Modal from '../modal';

expect.addSnapshotSerializer(serializer);

describe('components/modal', () => {
  describe('Modal', () => {
    const create = (spread = {}) => {
      const props = {
        open: true,
        ...spread,
      };
      const element = <Modal {...props} />;
      return {props, element};
    };

    it('should shallow render as expected', () => {
      const {element} = create({
        title: 'Remove freelancer',
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });

    it('should render with a title', () => {
      const TITLE = 'Remove freelancer';

      const {element} = create({
        title: TITLE,
      });
      const result = shallow(element);
      expect(result.find('H2').contains(TITLE)).toBe(true);
    });
  });
});
