import React from 'react';

import {Box, InlineFlex} from '../';

export const examples = [
  {
    title: 'Box',
    description: 'A basic wrapping box component',
    render: () => (
      <Box margin={['small', 'medium', 'large']} paddingTop={'small'}>
        This is the layout box
      </Box>
    ),
  },
  {
    title: 'InlineFlex',
    description: 'A span element with inline-flex set as its display property',
    render: () => <InlineFlex>An inline flex component</InlineFlex>,
  },
];
