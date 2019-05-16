import * as React from 'react';
import PropTypes from 'prop-types';

import Paper from '../../paper';
/**
 * Paper Skeleton
 */

const SkeletonPaper = props => {
  const {children, ...otherProps} = props;
  return (
    <Paper padding={16} {...otherProps}>
      {children}
    </Paper>
  );
};

SkeletonPaper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkeletonPaper;
