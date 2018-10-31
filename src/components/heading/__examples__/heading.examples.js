import React from 'react';

import Heading from '../';

export const examples = [
  {
    title: 'H800',
    render: () => <Heading size="800">Account settings</Heading>,
  },
  {
    title: 'H700',
    render: () => <Heading size="700">Your profile</Heading>,
  },
  {
    title: 'H600',
    render: () => <Heading size="600">Invoice 16</Heading>,
  },
  {
    title: 'H500',
    render: () => <Heading size="500">Create new template</Heading>,
  },
  {
    title: 'H600 with icon',
    description:
      'An icon can be passed down to display either side of the heading',
    render: () => (
      <Heading size="600" icon="lock">
        Overall performance
      </Heading>
    ),
  },
];
