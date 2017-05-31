import React from 'react';
import {storiesOf} from '@storybook/react';

import ToggleButton from 'components/toggle-button';

storiesOf(
  'ToggleButton',
  module,
).addWithInfo(
  'A standard toggle',
  'Useful for switching between two options.',
  () => {
    return <ToggleButton selected={true} />;
  },
);
