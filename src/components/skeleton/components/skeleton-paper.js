/* @flow */
import * as React from 'react';

import Paper from '../../paper';
/**
 * Paper Skeleton
 */

type TProps = {
  children: React.Node,
};

export default function SkeletonPaper(props: TProps) {
  const {children, ...otherProps} = props;
  return (
    <Paper padding={16} {...otherProps}>
      {children}
    </Paper>
  );
}
