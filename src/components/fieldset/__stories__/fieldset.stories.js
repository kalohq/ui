/* @flow */
import React from 'react';

import Fieldset from '../fieldset';

import Field from '../../field';
import Input from '../../input';

export const examples = [
  {
    title: 'Fieldset',
    description: 'A standard Fieldset',
    background: 'white',
    render: () => (
      <Fieldset>
        <Field label="Your email" required={true}>
          <Input placeholder="hello@kalohq.com" />
        </Field>
      </Fieldset>
    ),
  },
  {
    title: 'with inset',
    description:
      'You can control the background color of a fieldset to give a visual inset effect',
    background: 'white',
    render: () => (
      <div>
        <Fieldset>
          <Field label="Your name" required={true}>
            <Input placeholder="Alex" />
          </Field>
        </Fieldset>
        <Fieldset inset={true}>
          <Field label="Your email" required={true}>
            <Input placeholder="hello@kalohq.com" />
          </Field>
        </Fieldset>
      </div>
    ),
  },
];
