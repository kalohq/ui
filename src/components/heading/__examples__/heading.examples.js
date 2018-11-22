import React from 'react';

import Heading from '../';

export const examples = [
  {
    title: 'Extra large header',
    render: () => <Heading size="extra-large">Account settings</Heading>,
  },
  {
    title: 'Large header',
    render: () => <Heading size="large">Your profile</Heading>,
  },
  {
    title: 'Medium header',
    render: () => <Heading size="medium">Invoice 16</Heading>,
  },
  {
    title: 'Small header',
    render: () => <Heading size="small">Create new template</Heading>,
  },
  {
    title: 'Headings with icon',
    description:
      'An icon can be passed down to display either side of the heading',
    render: () => (
      <span>
        <Heading size="extra-large" icon="lock">
          Extra Large Header
        </Heading>
        <br />
        <br />
        <Heading size="large" icon="lock">
          Large Header
        </Heading>
        <br />
        <br />
        <Heading size="medium" icon="lock">
          Medium Header
        </Heading>
        <br />
        <br />
        <Heading size="small" icon="lock">
          Small Header
        </Heading>
      </span>
    ),
  },
];
