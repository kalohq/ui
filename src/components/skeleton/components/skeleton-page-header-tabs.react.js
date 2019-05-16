import * as React from 'react';
import PropTypes from 'prop-types';

import {Box} from '../../layout';
import SpacerBox from './skeleton-spacer-box.react';

const SkeletonPageHeaderTabs = props => {
  const {width = 1180, children, ...otherProps} = props;
  return (
    <Box margin={[0, 'auto']} width={width} {...otherProps}>
      <SpacerBox height={46}>{children}</SpacerBox>
    </Box>
  );
};

SkeletonPageHeaderTabs.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default SkeletonPageHeaderTabs;
