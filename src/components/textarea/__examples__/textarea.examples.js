/* @flow */
import React from 'react';

import Textarea from '../textarea';

export const examples = [
  {
    title: 'Textarea',
    description: 'A standard Textarea',
    render: () => (
      <Textarea placeholder="Add a project summary" expand={true} />
    ),
  },
  {
    title: 'Expanding textarea',
    description:
      "Textarea can also exand automatically in relation to it's contents, by passing an expand prop",
    render: () => (
      <Textarea placeholder="Add a project summary" expand={true} />
    ),
  },
];
