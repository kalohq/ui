import React from 'react';

import FieldRow from '../';
import Field from '../../field';
import Input from '../../input';

export const examples = [
  {
    title: 'FieldRow',
    description: 'A standard FieldRow',
    render: () => (
      <FieldRow>
        <Field label="Project name">
          <Input placeholder="My first project" />
        </Field>
        <Field label="Task name">
          <Input placeholder="My first task" />
        </Field>
      </FieldRow>
    ),
  },
  {
    title: 'FieldRow with custom gutter',
    description:
      'The gutter between field elements can also be customised, although we recommend using the default',
    render: () => (
      <div>
        <FieldRow gutter={40}>
          <Field label="Name">
            <Input placeholder="Give your project a name" />
          </Field>
          <Field label="Summary">
            <Input placeholder="A brief description of your project" />
          </Field>
        </FieldRow>
        <FieldRow gutter={40}>
          <Field label="Budget">
            <Input placeholder="Your total spend for the project" />
          </Field>
          <Field label="Project template">
            <Input placeholder="Select a template for the project" />
          </Field>
        </FieldRow>
      </div>
    ),
  },
];
