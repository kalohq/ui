/* @flow */
/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import Input, {InputAddon} from '../input';

describe('components/input', () => {
  describe('Input (default)', () => {
    const create = props => shallow(<Input {...props} />);

    it('should render shallow component ok', () => {
      const element = create({
        theme: 'default',
      });

      expect(element).toExist('should render OK');
    });

    it('should render prefixed addon content', () => {
      const element = create({
        theme: 'default',
        addonPrefix: '£',
      });
      expect(element.find(InputAddon).length).toBe(1);
    });

    it('should render suffixed addon content', () => {
      const element = create({
        theme: 'default',
        addonSuffix: '£',
      });
      expect(element.find(InputAddon).length).toBe(1);
    });
  });
});
