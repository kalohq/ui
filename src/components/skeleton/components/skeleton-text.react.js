import * as React from 'react';
import PropTypes from 'prop-types';

import SkeletonShape from './skeleton-shape.react';
import {TEXT_HEIGHT} from '../skeleton.react';

/**
 * Text Skeleton
 * TODO: Allow multiline (with appropriate line spacing)
 */

const SkeletonText = props => {
  const {heading, width = '50%', ...otherProps} = props;
  const height = heading ? TEXT_HEIGHT * 2 : TEXT_HEIGHT;
  return <SkeletonShape height={height} width={width} {...otherProps} />;
};

SkeletonText.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  heading: PropTypes.bool,
};

export default SkeletonText;
