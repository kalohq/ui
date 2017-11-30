/* @flow */
/* eslint-env jest */
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';
import serializer from 'enzyme-to-json/serializer';

import {Box, Block, Flex, Inline, InlineFlex} from 'components/layout';

expect.addSnapshotSerializer(serializer);

describe('components/layout', () => {
  describe('Box', () => {
    const create = testComponent(Box, (props = {}) => props);

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });

    it('should allow overriding of default styles', () => {
      const {element} = create({
        flex: 0,
        alignContent: 'flex-end',
        flexShrink: 1,
        style: {color: 'red'},
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });

    it('should allow passing vector style values', () => {
      const {element} = create({
        margin: [0, 5, '10%', 15],
        padding: [15, undefined],
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });
  });

  describe('Block', () => {
    const create = testComponent(Block, (props = {}) => props);

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });
  });

  describe('Flex', () => {
    const create = testComponent(Flex, (props = {}) => props);

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });
  });

  describe('Inline', () => {
    const create = testComponent(Inline, (props = {}) => props);

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });
  });

  describe('InlineFlex', () => {
    const create = testComponent(InlineFlex, (props = {}) => props);

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);
      expect(result).toMatchSnapshot();
    });
  });
});
