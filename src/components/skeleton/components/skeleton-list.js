/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import SpacerBox from './skeleton-spacer-box';

/**
 * Vertical list layout skeleton componen
 */

type TProps = {
  children: React.Node,
  center: string,
};

function SkeletonList(props: TProps) {
  const {children, center, ...otherProps} = props;
  return (
    <SpacerBox
      vertical={true}
      spacing={10}
      alignItems="stretch"
      center={center}
      {...otherProps}
    >
      {children}
    </SpacerBox>
  );
}

export default pure(SkeletonList);
