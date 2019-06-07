import * as React from 'react';
import PropTypes from 'prop-types';

import {Box} from '../../layout';

const SkeletonPage = props => {
  const {width = 1180, children, ...otherProps} = props;
  return (
    <Box>
      <Box margin={[50, 'auto']} width={width} {...otherProps}>
        {children}
      </Box>
    </Box>
  );
};

SkeletonPage.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

export default SkeletonPage;
