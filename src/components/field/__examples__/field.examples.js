/* @flow */
import React from 'react';

import Field from '../';
import Input from '../../input';
import Text from '../../text';

const exampleAction = (
  <Text size="extra-small" onClick={() => {}}>
    Show map
  </Text>
);

export const examples = [
  {
    title: 'Field',
    description: 'A basic form field in intial state',
    render: () => (
      <Field label="Your email">
        <Input placeholder="hello@kalohq.com" />
      </Field>
    ),
    html: () => (
      <div className="ui-field">
        <label htmlFor="email" className="ui-field-label">
          Your email
        </label>
        <input
          id="email"
          className="ui-input ui-input--medium"
          placeholder="hello@kalohq.com"
        />
      </div>
    ),
  },
  {
    title: 'Field with validation',
    description: 'A field with an input with validations',
    render: () => (
      // $FlowFixMe
      <Field
        label="Your email"
        validations={[{message: 'Your email was not valid'}]}
      >
        <Input placeholder="hello@kalohq.com" />
      </Field>
    ),
    html: () => (
      <div className="ui-field">
        <label htmlFor="email" className="ui-field-label">
          Your email
        </label>
        <input
          id="email"
          className="ui-input ui-input--medium"
          placeholder="hello@kalohq.com"
        />
        <span className="ui-field-validation">Your email was not valid</span>
      </div>
    ),
  },
  {
    title: 'Field with required status',
    description: 'Adds an asterisk to display that a field is required',
    render: () => (
      <Field label="Your email" required={true}>
        <Input placeholder="hello@kalohq.com" />
      </Field>
    ),
  },
  {
    title: 'Field with locked status',
    description: 'A lock icon can be shown to signify that the input is locked',
    render: () => (
      <Field label="Your email" locked={true}>
        <Input placeholder="hello@kalohq.com" />
      </Field>
    ),
  },
  {
    title: 'Field with action label',
    description: 'A secondary action label can be added',
    render: () => (
      <Field label="Your home city" labelAction={exampleAction}>
        <Input placeholder="London" />
      </Field>
    ),
  },
  {
    title: 'Field with hint',
    description:
      'Useful for providing information about what the input is required for',
    render: () => (
      <Field
        hint="This will become your login username"
        hintIcon="info"
        label="Your email"
      >
        <Input placeholder="hello@kalohq.com" />
      </Field>
    ),
    html: () => (
      <div className="ui-field">
        <label htmlFor="email" className="ui-field-label">
          Your email
        </label>
        <input
          id="email"
          className="ui-input ui-input--medium"
          placeholder="hello@kalohq.com"
        />
        <span className="ui-field-hint">
          This will become your login username
        </span>
      </div>
    ),
  },
  {
    title: 'Inline field',
    description: 'Displays the field with the label and input on the same line',
    render: () => (
      <Field label="Your email" inline={true} labelWidth={100}>
        <Input placeholder="hello@kalohq.com" />
      </Field>
    ),
    html: () => (
      <div className="ui-field ui-field--inline">
        <label htmlFor="email" className="ui-field-label">
          Your email
        </label>
        <input
          id="email"
          className="ui-input ui-input--medium"
          placeholder="hello@kalohq.com"
        />
      </div>
    ),
  },
];
