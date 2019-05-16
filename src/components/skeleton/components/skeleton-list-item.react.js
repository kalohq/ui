import * as React from 'react';
import PropTypes from 'prop-types';

import SkeletonPaper from './skeleton-paper.react';
import SkeletonText from './skeleton-text.react';
import SpacerBox from './skeleton-spacer-box.react';

const SkeletonListItem = props => {
  const {children, ...otherProps} = props;
  return (
    <SkeletonPaper padding={25} {...otherProps}>
      <SpacerBox overflow="hidden">
        {children
          ? children
          : [
              <SkeletonText width="20%" key={0} />,
              <SkeletonText key={1} width="10%" />,
            ]}
      </SpacerBox>
    </SkeletonPaper>
  );
};

SkeletonListItem.propTypes = {
  children: PropTypes.node,
};

export default SkeletonListItem;
