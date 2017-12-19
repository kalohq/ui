import React from 'react';
import {storiesOf} from '@storybook/react';

import {Box, InlineFlex} from 'components/layout';

storiesOf('Layout', module)
  .addWithInfo('Box', 'A basic wrapping box component', () => {
    return (
      <Box margin={['small', 'medium', 'large']} paddingTop={'small'}>
        This is the layout box
      </Box>
    );
  })
  .addWithInfo(
    'InlineFlex',
    'A span element with inline-flex set as its display property',
    () => {
      return <InlineFlex component="main">An inline flex component</InlineFlex>;
    }
  );
