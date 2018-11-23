/* eslint-env jest */
import * as React from 'react';
import {mount} from '../../../utils/test/enzyme';

import TagGroup from '../tag-group';
import Tag from '../../tag';

describe('TagGroup', () => {
  const create = props => (
    <TagGroup {...props}>
      <Tag>Tag one</Tag>
      <Tag>Another tag</Tag>
      <Tag>A third tag</Tag>
    </TagGroup>
  );

  it('should render correctly', () => {
    const element = create();

    const result = mount(element);
    expect(result.exists()).toBe(true);
    expect(result.find(Tag).length).toBe(3);
  });

  it('should limit the number of children if a limit is set', () => {
    const element = (
      <TagGroup limit={4}>
        <Tag>Tag one</Tag>
        <Tag>Another tag</Tag>
        <Tag>A third tag</Tag>
        <Tag>A fourth tag</Tag>
        <Tag>A fifth tag</Tag>
      </TagGroup>
    );

    const result = mount(element);
    expect(result.exists()).toBe(true);
    expect(result.find(Tag).length).toBe(4);
  });
});
