import React from 'react';
import {storiesOf} from '@storybook/react';

import {Box} from 'components/layout';

storiesOf(
  'Layout',
  module
).addWithInfo('Box', 'A basic wrapping box component', () => {
  return (
    <Box margin={['small', 'medium', 'large']} paddingTop={'small'}>
      This is the layout box
    </Box>
  );
});
