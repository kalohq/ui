import * as React from 'react';
import PropTypes from 'prop-types';

import SpacerBox from './skeleton-spacer-box.react';

const SkeletonGrid = props => {
  const {children, center, ...otherProps} = props;
  return (
    <SpacerBox childFlex={1} center={center} {...otherProps}>
      {children}
    </SpacerBox>
  );
};

SkeletonGrid.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};

export default SkeletonGrid;
