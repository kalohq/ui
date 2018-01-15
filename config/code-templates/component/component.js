/* @flow */
import React from 'react';
import styled from 'react-emotion';

import {Box} from '../layout';

/**
 * {{description}}
 */
export function {{exports}}(
  props: {
    children?: React$Node,
  }
) {
  const {children, ...otherProps} = props;

  return (
    <Box>
      {{exports}}
      {children}
    </Box>
  );
}

export default {{exports}};
