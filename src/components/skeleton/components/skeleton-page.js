/* @flow */
import * as React from 'react';

import {Box} from '../../layout';

/** Skeleton page */

type TProps = {
  width?: number,
  children: React.Node,
};

export default function SkeletonPage(props: TProps) {
  const {width = 1180, children, ...otherProps} = props;
  return (
    <Box>
      <Box margin={[50, 'auto']} width={width} {...otherProps}>
        {children}
      </Box>
    </Box>
  );
}
