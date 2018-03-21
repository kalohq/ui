import React from 'react';

import Button from '../button';
import ButtonGroup from '../../button-group';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

export const examples = [
  {
    title: 'Tertiary Button',
    description:
      "The default style. Unless the action you're building is primary, this is the button you should use",
    render: () => <Button theme="tertiary">Export Freelancers</Button>,
  },
  {
    title: 'Primary Button',
    description:
      'The primary action of a view. It should be used no more than once per view.',
    render: () => <Button theme="primary">Create Project</Button>,
  },
  {
    title: 'Secondary Button',
    description: 'Used for supporting actions.',
    render: () => <Button theme="secondary">Save Changes</Button>,
  },
  {
    title: 'Delete Button',
    description: 'An action button for deleting/removing.',
    render: () => <Button theme="delete">Remove freelancer</Button>,
  },
  {
    title: 'Disabled Button',
    description:
      'Buttons can be disabled by toggling the disabled state. This will prevent any user interaction with the button (onClick will also be disabled).',
    render: () => (
      <Button theme="tertiary" disabled={true} onClick={myClickFunction}>
        Get Started
      </Button>
    ),
  },
  {
    title: 'DisabledSuccessButton',
    description:
      'Sometimes you want to trigger the success animation while keeping the button disabled/unclickable.',
    render: () => (
      <Button
        theme="tertiary"
        disabled={true}
        success={true}
        onClick={myClickFunction}
      >
        Get Started
      </Button>
    ),
  },
  {
    title: 'Button with icon',
    description:
      'To provide more context to an action, an icon (see the Icon component) can be floated next the button copy.',
    render: () => (
      <Button theme="tertiary" icon="file_download">
        Generate Invoice
      </Button>
    ),
  },
  {
    title: 'Button with lone icon',
    description: 'A button can also be used with a standalone icon',
    render: () => (
      <Button theme="tertiary" size="medium" icon="mode_edit" loneIcon={true} />
    ),
  },
  {
    title: 'Sizing',
    description:
      'Buttons come in three different sizes: small, medium, and large',
    render: () => (
      <ButtonGroup spacing={true}>
        <Button theme="tertiary" size="small">
          Small
        </Button>
        <Button theme="tertiary" size="medium">
          Medium
        </Button>
        <Button theme="tertiary" size="large">
          Large
        </Button>
      </ButtonGroup>
    ),
  },
];
