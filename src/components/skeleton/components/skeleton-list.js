/* @flow */
import * as React from 'react';

import SpacerBox from './skeleton-spacer-box';

/**
 * Vertical list layout skeleton componen
 */

type TProps = {
  children: React.Node,
  center?: boolean,
};

export default function SkeletonList(props: TProps) {
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
