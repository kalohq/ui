/* @flow */
/* eslint-env jest */
import * as React from 'react';
import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';
import renderer from 'react-test-renderer';
import {Box, Block, Flex, Inline, InlineFlex} from 'components/layout';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('Box', () => {
  const create = (props = {}) => renderer.create(<Box {...props} />).toJSON();

  test('should render correctly', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should allow overriding of default styles', () => {
    const element = create({
      flex: 0,
      alignContent: 'flex-end',
      flexShrink: 1,
      style: {color: 'red'},
    });

    expect(element).toMatchSnapshot();
  });

  test('should allow passing vector style values', () => {
    const element = create({
      margin: [0, 5, '10%', 15],
      padding: [15, undefined],
    });
    expect(element).toMatchSnapshot();
  });

  test('should allow passing spacing scales', () => {
    const element = create({
      margin: ['small', 'medium', 'large'],
      paddingTop: 'small',
    });

    expect(element).toMatchSnapshot();
  });
});

describe('Block', () => {
  const create = (props = {}) => renderer.create(<Block {...props} />).toJSON();

  test('should render correctly', () => {
    const element = create({
      flex: 0,
      onClick: null,
    });
    expect(element).toMatchSnapshot();
  });
});

describe('Flex', () => {
  const create = (props = {}) => renderer.create(<Flex {...props} />).toJSON();

  test('should render correctly', () => {
    const element = create({
      flex: 0,
      onClick: null,
    });
    expect(element).toMatchSnapshot();
  });
});

describe('Inline', () => {
  const create = (props = {}) =>
    renderer.create(<Inline {...props} />).toJSON();

  test('should render correctly', () => {
    const element = create({
      flex: 0,
      onClick: null,
    });
    expect(element).toMatchSnapshot();
  });
});

describe('InlineFlex', () => {
  const create = (props = {}) =>
    renderer.create(<InlineFlex {...props} />).toJSON();

  test('should render correctly', () => {
    const element = create({
      flex: 0,
      onClick: null,
    });
    expect(element).toMatchSnapshot();
  });
});
