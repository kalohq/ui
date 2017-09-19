/* @flow */
/* eslint-env jest */
import {shallow} from 'enzyme';
import {testComponent} from 'utils/test/react';

import {Box, Block, Flex, Inline, InlineFlex} from 'components/layout';

describe('components/layout', () => {
  describe('Box', () => {
    const create = testComponent(Box, () => ({
      // insert your default props here ...
    }));

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);

      const onClick = result.prop('onClick');
      const style = result.prop('style');
      expect(onClick).toBe(null);

      // Should only include whitelisted props in style
      // Note that others not in whitelist will passthrough
      expect(style).toMatchObject({
        display: 'flex',
        flex: 0,
        // Expect extra default values
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexShrink: 0,
        alignContent: 'flex-start',
      });
    });

    it('should allow overriding of default styles', () => {
      const {element} = create({
        flex: 0,
        alignContent: 'flex-end',
        flexShrink: 1,
        style: {color: 'red'},
      });
      const result = shallow(element);
      const style = result.prop('style');

      // Should only include whitelisted props in style
      // Note that others not in whitelist will passthrough
      expect(style).toMatchObject({
        display: 'flex',
        flex: 0,
        // Expect extra default values
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexShrink: 1,
        alignContent: 'flex-end',
        color: 'red',
      });
    });

    it('should allow passing vector style values', () => {
      const {element} = create({
        margin: [0, 5, '10%', 15],
        padding: [15, undefined],
      });
      const result = shallow(element);
      const style = result.prop('style');

      expect(style).toMatchObject({
        // Box defaults
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'stretch',
        flexShrink: 0,
        alignContent: 'flex-start',

        // the vector values
        margin: '0 5px 10% 15px',
        padding: '15px 0',
      });
    });
  });

  describe('Block', () => {
    const create = testComponent(Block, () => ({
      // insert your default props here ...
    }));

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);

      const onClick = result.prop('onClick');
      const style = result.prop('style');

      expect(onClick).toBe(null);
      // Should only include whitelisted props in style
      // Note that others not in whitelist will passthrough
      expect(style).toMatchObject({
        display: 'block',
        flex: 0,
      });
    });
  });

  describe('Flex', () => {
    const create = testComponent(Flex, () => ({
      // insert your default props here ...
    }));

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);

      const onClick = result.prop('onClick');
      const style = result.prop('style');

      expect(onClick).toBe(null);
      // Should only include whitelisted props in style
      // Note that others not in whitelist will passthrough
      expect(style).toMatchObject({
        display: 'flex',
        flex: 0,
      });
    });
  });

  describe('Inline', () => {
    const create = testComponent(Inline, () => ({
      // insert your default props here ...
    }));

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);

      const onClick = result.prop('onClick');
      const style = result.prop('style');

      expect(onClick).toBe(null);
      // Should only include whitelisted props in style
      // Note that others not in whitelist will passthrough
      expect(style).toMatchObject({
        display: 'inline-block',
        flex: 0,
      });
    });
  });

  describe('InlineFlex', () => {
    const create = testComponent(InlineFlex, () => ({
      // insert your default props here ...
    }));

    it('should render correctly', () => {
      const {element} = create({
        flex: 0,
        onClick: null,
      });
      const result = shallow(element);

      const onClick = result.prop('onClick');
      const style = result.prop('style');

      expect(onClick).toBe(null);
      // Should only include whitelisted props in style
      // Note that others not in whitelist will passthrough
      expect(style).toMatchObject({
        display: 'inline-flex',
        flex: 0,
      });
    });
  });
});
