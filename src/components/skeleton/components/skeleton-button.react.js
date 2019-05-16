import * as React from 'react';
import PropTypes from 'prop-types';

import SkeletonShape from './skeleton-shape.react';
import {TEXT_SIZE_MULTIPLIER, BUTTON_HEIGHT} from '../skeleton.react';

/**
 * Button Skeleton
 */

const SkeletonButton = props => {
  const {size = 7, square, ...otherProps} = props;
  const width = square ? BUTTON_HEIGHT : size * TEXT_SIZE_MULTIPLIER;
  return <SkeletonShape height={BUTTON_HEIGHT} width={width} {...otherProps} />;
};

SkeletonButton.propTypes = {
  size: PropTypes.number,
  square: PropTypes.bool,
};

export default SkeletonButton;
