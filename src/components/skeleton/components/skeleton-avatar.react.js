import * as React from 'react';
import PropTypes from 'prop-types';
import SkeletonShape from './skeleton-shape.react';

import {AVATAR_SIZE_MULTIPLIER} from '../skeleton.react';
/**
 * Avatar Skeleton
 */
const SkeletonAvatar = props => {
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
};

SkeletonAvatar.propTypes = {
  size: PropTypes.number,
};

export default SkeletonAvatar;
