import React from 'react';

import Checkbox from '../checkbox';
import Text from '../../text';

const myClickFunction = () => {
  //eslint-disable-next-line
  window.alert('Hello from an onClick event');
};

export const examples = [
  {
    title: 'Checkbox',
    description:
      'A standard checkbox. Pass a label using the prop to ensure that interaction happens on both the checkbox and the label',
    render: () => (
      <Checkbox
        label="Onboarding freelancers"
        checked={false}
        onClick={myClickFunction}
      />
    ),
  },
  {
    title: 'readonly',
    description:
      ' non-interactive checkbox. Can still displayed a checked state',
    render: () => (
      <Checkbox
        label="Onboarding freelancers"
        size="medium"
        checked={true}
        readonly={true}
        onClick={myClickFunction}
      />
    ),
  },
  {
    title: 'Disabled',
    description: 'A disabled checkbox. Can still displayed a checked state',
    render: () => (
      <Checkbox
        label="Onboarding freelancers"
        size="medium"
        checked={true}
        disabled={true}
        onClick={myClickFunction}
      />
    ),
  },
  {
    title: 'Sizing',
    description: 'Checkboxes can be in three sizes. Small, medium, and large',
    render: () => (
      <span>
        <Checkbox label="Onboarding freelancers" size="small" />
        <Checkbox label="Onboarding freelancers" size="medium" />
        <Checkbox label="Freelancer invoices" size="large" />
      </span>
    ),
  },
  {
    title: 'Indeterminate',
    description: 'Checkboxes can be indeterminate checked',
    render: () => (
      <Checkbox label="Freelancer invoices" size="large" indeterminate={true} />
    ),
  },
  {
    title: 'With a custom label',
    description: 'Checkboxes can also have custom labels',
    render: () => (
      <Checkbox
        label={
          <Text marginLeft={8} size="extra-large" color="pink500">
            A custom label
          </Text>
        }
        size="medium"
      />
    ),
  },
];
