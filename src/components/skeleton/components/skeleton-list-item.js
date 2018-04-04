/* @flow */
import * as React from 'react';

import SkeletonPaper from './skeleton-paper';
import SkeletonText from './skeleton-text';
import SpacerBox from './skeleton-spacer-box';

/**
 * List Item Skeleton
 */

type TProps = {
  children: React.Node,
};

export default function SkeletonListItem(props: TProps) {
  const {children, ...otherProps} = props;
  return (
    <SkeletonPaper padding={25} {...otherProps}>
      <SpacerBox>
        {children ? (
          children
        ) : (
          [
            <SkeletonText width="20%" key={0} />,
            <SkeletonText key={1} width="10%" />,
          ]
        )}
      </SpacerBox>
    </SkeletonPaper>
  );
}
