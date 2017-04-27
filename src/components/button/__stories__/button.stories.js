import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Button from 'components/button';

storiesOf('Button', module)
  .addWithInfo(
    'Primary Button',
    'The primary action of a view. It should be used no more than once per view.',
    () => {
      return (
        <Button theme="primary">Create Project</Button>
      );
    }
  )
  .addWithInfo(
    'Secondary Button',
    'Used for supporting actions.',
    () => {
      return (
        <Button theme="secondary">Save Changes</Button>
      );
    }
  )
  .addWithInfo(
    'Tertiary Button',
    'Our default button. Used for other actions.',
    () => {
      return (
        <Button theme="tertiary">Export Freelancers</Button>
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
        <Button theme="tertiary" size="medium" icon="mode_edit" loneIcon={true} />
      );
    }
  );
