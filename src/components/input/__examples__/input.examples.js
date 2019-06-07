import React from 'react';

import Input from '../';

export const examples = [
  {
    title: 'Input',
    description: 'A basic input',
    render: () => <Input placeholder="Your first name" />,
    html: () => (
      <input
        type="text"
        className="ui-input ui-input--medium"
        placeholder="Your first name"
      />
    ),
  },
  {
    title: 'Well input',
    description: 'A highlighted input that turns into a normal input on focus',
    render: () => <Input placeholder="Location" theme="well" icon="search" />,
    html: () => (
      <input
        type="text"
        className="ui-input ui-input--theme-well ui-input--medium"
        placeholder="Location"
      />
    ),
  },
  {
    title: 'Disabled Input',
    description:
      "An input that is disabled and doesn't allow user manipulation",
    render: () => <Input placeholder="Your twitter handle" disabled={true} />,
  },
  {
    title: 'Readonly Input',
    description: 'An input that is readonly',
    render: () => <Input readonly={true} value="Project 101" />,
  },
  {
    title: 'Sizing',
    description: 'Inputs can be one of three sizes',
    render: () => (
      <span>
        <Input placeholder="Small input" size="small" />
        <br />
        <Input placeholder="Medium input" size="medium" />
        <br />
        <Input placeholder="Large input" size="large" />
      </span>
    ),
  },
  {
    title: 'With addon before',
    description:
      'Inputs can have addons to display contextual hints to the user',
    render: () => <Input size="medium" addonPrefix="$" placeholder="0.00" />,
  },
  {
    title: 'With addon after',
    description: 'Likewise, inputs can have addons after the main input',
    render: () => (
      <Input size="medium" addonSuffix="kalohq.com" placeholder="0.00" />
    ),
  },
  {
    title: 'With valid status',
    description: 'Displays an input with a valid status',
    render: () => <Input valid={true} placeholder="hello@kalohq.com" />,
  },
  {
    title: 'With invalid status',
    description: 'Displays an input with an invalid status',
    render: () => <Input valid={false} placeholder="hello@kalohq.com" />,
  },
];
