/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import {Box} from '../../layout';

/** Skeleton page */

type TProps = {
  width?: number,
  children: React.Node,
};

function SkeletonPage(props: TProps) {
  const {width = 1180, children, ...otherProps} = props;
  return (
    <Box>
      <Box margin={[50, 'auto']} width={width} {...otherProps}>
        {children}
      </Box>
    </Box>
  );
}

export default pure(SkeletonPage);
