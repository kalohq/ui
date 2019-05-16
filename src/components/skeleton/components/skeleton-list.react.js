import * as React from 'react';
import PropTypes from 'prop-types';

import SpacerBox from './skeleton-spacer-box.react';

const SkeletonList = props => {
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
};

SkeletonList.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};
export default SkeletonList;
