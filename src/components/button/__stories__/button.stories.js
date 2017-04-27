import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Button from 'components/button';

storiesOf('Button', module)
  .addWithInfo(
    'Primary Button',
    'The primary button should be used once per view.',
    () => {
      return (
        <Button theme="primary">Create Project</Button>
      );
    }
  )
  .addWithInfo(
    'Secondary Button',
    'The primary button should be used once per view.',
    () => {
      return (
        <Button theme="secondary">Save Changes</Button>
      );
    }
  )
  .addWithInfo(
    'Tertiary Button',
    'The tertiary button should be used once per view.',
    () => {
      return (
        <Button theme="tertiary">Export Freelancers</Button>
      );
    }
  )
  .addWithInfo(
    'Button with Icon',
    'The tertiary button should be used once per view.',
    () => {
      return (
        <Button theme="tertiary" icon="file_download">Generate Invoice</Button>
      );
    }
  );
