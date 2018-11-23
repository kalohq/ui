/* @flow */
import React from 'react';

import Tag from '../../tag';
import TagGroup from '../tag-group';

export const examples = [
  {
    title: 'Tag group',
    render: () => (
      <TagGroup>
        <Tag>Tag one</Tag>
        <Tag>Another tag</Tag>
        <Tag>A third tag</Tag>
      </TagGroup>
    ),
  },
];
