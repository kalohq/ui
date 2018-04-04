/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import {Box} from '../../layout';
import SpacerBox from './skeleton-spacer-box';

/** Skeleton page header heading */

type TProps = {
  width?: number,
  children: React.Node,
};

export function SkeletonPageHeaderTabs(props: TProps) {
  const {width = 1180, children, ...otherProps} = props;
  return (
    <Box margin={[0, 'auto']} width={width} {...otherProps}>
      <SpacerBox height={46}>{children}</SpacerBox>
    </Box>
  );
}

export default pure(SkeletonPageHeaderTabs);
