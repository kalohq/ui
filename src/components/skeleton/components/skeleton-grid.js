/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import SpacerBox from './skeleton-spacer-box';

/**
 * Single row horizontal grid skeleton
 */

type TProps = {
  children: React.Node,
  center: string,
};

function SkeletonGrid(props: TProps) {
  const {children, center, ...otherProps} = props;
  return (
    <SpacerBox childFlex={1} center={center} {...otherProps}>
      {children}
    </SpacerBox>
  );
}

export default pure(SkeletonGrid);
