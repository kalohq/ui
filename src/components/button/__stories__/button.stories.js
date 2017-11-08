import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from 'components/button';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

storiesOf('Button', module)
  .addWithInfo(
    'Default Button',
    "The default style. Unless the action you're building is primary, this is the button you should use.",
    () => {
      return <Button>Export Freelancers</Button>;
    }
  )
  .addWithInfo(
    'Primary Button',
    'The primary action of a view. It should be used no more than once per view.',
    () => {
      return <Button theme="primary">Create Project</Button>;
    }
  )
  .addWithInfo(
    'Delete Button',
    'An action button for deleting/removing',
    () => {
      return <Button theme="delete">Remove freelancer</Button>;
    }
  )
  .addWithInfo(
    'disabled state',
    'Buttons can be disabled by toggling the disabled state. This will prevent any user interaction with the button (onClick will also be disabled)',
    () => {
      return (
        <Button theme="tertiary" disabled={true} onClick={myClickFunction}>
          Get Started
        </Button>
      );
    }
  )
  .addWithInfo(
    'disabled and success state',
    'Sometimes you want to trigger the success animation while keeping the button disabled/unclickable',
    () => {
      return (
        <Button disabled={true} success={true} onClick={myClickFunction}>
          Get Started
        </Button>
      );
    }
  )
  .addWithInfo('Secondary Button', 'Used for supporting actions.', () => {
    return <Button theme="secondary">Save Changes</Button>;
  })
  .addWithInfo(
    'With icon',
    'To provide more context to an action, an icon (see the Icon component) can be floated next the button copy',
    () => {
      return <Button icon="file_download">Generate Invoice</Button>;
    }
  )
  .addWithInfo(
    'With lone icon',
    'A button can also be used with a standalone icon',
    () => {
      return <Button size="medium" icon="mode_edit" loneIcon={true} />;
    }
  );
