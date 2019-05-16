import * as React from 'react';
import PropTypes from 'prop-types';

import {Box} from '../../layout';

const SkeletonContent = ({children, ...otherProps}) => (
  <Box padding={16} {...otherProps}>
    {children}
  </Box>
);

SkeletonContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkeletonContent;
