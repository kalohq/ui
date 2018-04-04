/* @flow */
import * as React from 'react';

import {Box} from '../../layout';

/** Generic content skeleton */

type TProps = {
  children: React.Node,
};

export default function SkeletonContent(props: TProps) {
  const {children, ...otherProps} = props;
  return (
    <Box padding={16} {...otherProps}>
      {children}
    </Box>
  );
}
