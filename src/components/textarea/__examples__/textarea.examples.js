import React from 'react';
import Textarea from '../';

export const examples = [
  {
    title: 'Textarea',
    description: 'A standard Textarea',
    render: () => <Textarea placeholder="Add a project summary" />,
    html: () => (
      <textarea className="ui-textarea" placeholder="Add a project summary" />
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
