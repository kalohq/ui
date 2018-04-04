/* @flow */
import * as React from 'react';

import SpacerBox from './skeleton-spacer-box';

/**
 * Single row horizontal grid skeleton
 */

type TProps = {
  children: React.Node,
  center: string,
};

export default function SkeletonGrid(props: TProps) {
  const {children, center, ...otherProps} = props;
  return (
    <SpacerBox childFlex={1} center={center} {...otherProps}>
      {children}
    </SpacerBox>
  );
}
