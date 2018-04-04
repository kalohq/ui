/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import SkeletonPaper from './skeleton-paper';
import SkeletonText from './skeleton-text';
import SpacerBox from './skeleton-spacer-box';

/**
 * List Item Skeleton
 */

type TProps = {
  children: React.Node,
};

function SkeletonListItem(props: TProps) {
  const {children, ...otherProps} = props;
  return (
    <SkeletonPaper padding={25} {...otherProps}>
      <SpacerBox>
        {children ? (
          children
        ) : (
          [<SkeletonText size={14} key={0} />, <SkeletonText key={1} />]
        )}
      </SpacerBox>
    </SkeletonPaper>
  );
}

export default pure(SkeletonListItem);
