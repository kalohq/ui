import React from 'react';
import {storiesOf} from '@storybook/react';

import PrimaryActionButton from 'components/primary-action-button';

storiesOf(
  'PrimaryActionButton',
  module,
).addWithInfo(
  'PrimaryActionButton',
  'Renders a button with explicitly defined props.',
  () => {
    return <PrimaryActionButton icon="add" name="Create Category" />;
  },
);
