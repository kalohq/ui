import React from 'react';

import H1 from '../../h1';
import H2 from '../../h2';
import H3 from '../../h3';
import H4 from '../../h4';

export const examples = [
  {
    title: 'H1',
    description: 'The largest heading. A custom styled H1',
    render: () => <H1>Account settings</H1>,
  },
  {
    title: 'H2',
    description: 'A custom styled H2',
    render: () => <H2>Your profile</H2>,
  },
  {
    title: 'H3',
    description: 'A custom styled H3',
    render: () => <H3>Invoice 16</H3>,
  },
  {
    title: 'H4',
    description: 'A custom styled H4',
    render: () => <H4>Create new template</H4>,
  },
  {
    title: 'H3 with icon',
    description:
      'An icon can be passed down to display either side of the heading',
    render: () => <H3 icon="lock">Overall performance</H3>,
  },
];
