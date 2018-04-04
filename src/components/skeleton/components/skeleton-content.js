/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import {Box} from '../../layout';

/** Generic content skeleton */

type TProps = {
  children: React.Node,
};

function SkeletonContent(props: TProps) {
  const {children, ...otherProps} = props;
  return (
    <Box padding={16} {...otherProps}>
      {children}
    </Box>
  );
}

export default pure(SkeletonContent);
