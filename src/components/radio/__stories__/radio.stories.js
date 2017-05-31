import React from 'react';
import {storiesOf} from '@storybook/react';

import Radio from 'components/radio';

storiesOf(
  'Radio',
  module,
).addWithInfo('Single Radio', 'A standard radio button', () => {
  return <Radio label="Turn off notifications" checked={true} />;
});
