/* @flow */
import * as React from 'react';

import SkeletonPaper from './skeleton-paper';
import SkeletonText from './skeleton-text';
import SkeletonAvatar from './skeleton-avatar';
import SpacerBox from './skeleton-spacer-box';

type TProps = {
  children: React.Element<*>,
};

/**
 * A freelancer card skeleton
 */
export default function SkeletonCard(props: TProps) {
  const {children, ...otherProps} = props;
  return (
    <SkeletonPaper paddingTop={75} paddingBottom={150} {...otherProps}>
      <SpacerBox center={true} vertical={true}>
        {children ? (
          children
        ) : (
          [
            <SkeletonAvatar key="avatar" />,
            <SkeletonText key="text" width="14%" />,
            <SkeletonText key="text-2" width="20%" />,
          ]
        )}
      </SpacerBox>
    </SkeletonPaper>
  );
}
