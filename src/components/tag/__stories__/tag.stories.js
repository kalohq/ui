/* @flow */
import React from 'react';

import Tag from '../tag';

export const examples = [
  {
    title: 'Tag',
    description: 'A standard Tag',
    render: () => (
      <span>
        <Tag theme="blue" label="Scuba Diving" />
        <Tag theme="orange" label="Scuba Diving" />
        <Tag theme="purple" label="Scuba Diving" />
        <Tag theme="red" label="Scuba Diving" />
        <Tag theme="green" label="Scuba Diving" />
        <Tag theme="grey" label="Scuba Diving" />
      </span>
    ),
  },
  {
    title: 'Removable Tag',
    description:
      "Tags can be removed on-click by passing a function to onRemove. This will display an 'x' to the right of the tag",
    render: () => <Tag theme="red" label="Scuba Diving" onRemove={() => {}} />,
  },
];
