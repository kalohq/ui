import React from 'react';
import {storiesOf} from '@storybook/react';

import {Box} from 'components/layout';

storiesOf(
  'Layout',
  module
).addWithInfo('Box', 'A basic wrapping box component', () => {
  return (
    <Box
      width={300}
      height={300}
      padding={['medium', '18px']}
      marginTop="large"
      style={{backgroundColor: 'red'}}
    >
      This is the layout box
    </Box>
  );
});
