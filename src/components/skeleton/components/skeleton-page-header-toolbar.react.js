import * as React from 'react';
import PropTypes from 'prop-types';

import {UIBase, Box} from '../../layout';

import SpacerBox from './skeleton-spacer-box.react';

import styles from '../skeleton.module.css';

const SkeletonPageHeaderToolbar = props => {
  const {width = 1180, children} = props;
  return (
    <UIBase className={styles['ui-skeleton-page-header-toolbar']}>
      <Box margin={[0, 'auto']} width={width}>
        <SpacerBox height={46}>{children}</SpacerBox>
      </Box>
    </UIBase>
  );
};

SkeletonPageHeaderToolbar.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default SkeletonPageHeaderToolbar;
