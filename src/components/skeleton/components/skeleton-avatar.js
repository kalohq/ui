/* @flow */
import * as React from 'react';
import SkeletonShape from './skeleton-shape';

import {AVATAR_SIZE_MULTIPLIER} from '../skeleton';
/**
 * Avatar Skeleton
 */
export default function SkeletonAvatar(props: {size?: number}) {
  const {size = 4, ...otherProps} = props;
  const width = size * AVATAR_SIZE_MULTIPLIER;
  return (
    <SkeletonShape
      shape="circle"
      height={width}
      width={width}
      {...otherProps}
    />
  );
}
