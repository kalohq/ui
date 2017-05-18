import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Button from 'components/button';
import ButtonGroup from 'components/button-group';

var myClickFunction = function () {
  alert('Hello from an onClick event')
}

storiesOf('Button', module)
  .addWithInfo(
    'Tertiary Button',
    "The default style. Unless the action you're building is primary, this is the button you should use.",
    () => {
      return <Button theme="tertiary">Export Freelancers</Button>;
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
    'disabled state',
    'Buttons can be disabled by toggling the disabled state. This will prevent any user interaction with the button (onClick will also be disabled)',
    () => {
      return (
        <Button theme="tertiary" disabled={true} onClick={myClickFunction}>Get Started</Button>
      );
    }
  )
  .addWithInfo('Secondary Button', 'Used for supporting actions.', () => {
    return <Button theme="secondary">Save Changes</Button>;
  })
  .addWithInfo(
    'Sizing',
    'Buttons can be rendered in three different sizes, depending on context.',
    () => {
      return (
        <ButtonGroup spacing={true}>
          <Button size="small" theme="tertiary">Small</Button>
          <Button size="medium" theme="tertiary">Medium</Button>
          <Button size="large" theme="tertiary">Large</Button>
        </ButtonGroup>
      );
    }
  )
  .addWithInfo(
    'With icon',
    'To provide more context to an action, an icon (see the Icon component) can be floated next the button copy',
    () => {
      return (
        <Button theme="tertiary" icon="file_download">Generate Invoice</Button>
      );
    }
  )
  .addWithInfo(
    'With lone icon',
    'A button can also be used with a standalone icon',
    () => {
      return (
        <Button
          theme="tertiary"
          size="medium"
          icon="mode_edit"
          loneIcon={true}
        />
      );
    }
  );
