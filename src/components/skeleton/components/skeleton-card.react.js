import * as React from 'react';
import PropTypes from 'prop-types';

import SkeletonPaper from './skeleton-paper.react';
import SkeletonText from './skeleton-text.react';
import SkeletonAvatar from './skeleton-avatar.react';
import SpacerBox from './skeleton-spacer-box.react';

/**
 * A freelancer card skeleton
 */
const SkeletonCard = props => {
  const {children, ...otherProps} = props;
  return (
    <SkeletonPaper paddingTop={75} paddingBottom={150} {...otherProps}>
      <SpacerBox center={true} vertical={true}>
        {children
          ? children
          : [
              <SkeletonAvatar key="avatar" />,
              <SkeletonText key="text" width="14%" />,
              <SkeletonText key="text-2" width="20%" />,
            ]}
      </SpacerBox>
    </SkeletonPaper>
  );
};

SkeletonCard.propTypes = {
  children: PropTypes.node,
};

export default SkeletonCard;
