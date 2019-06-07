/* @flow */
import * as React from 'react';

import {UIBase, Box} from '../../layout';

import SpacerBox from './skeleton-spacer-box.react';

import styles from '../skeleton.module.css';

/** Skeleton page header heading */

type TProps = {
  width?: number,
  children: React.Element<*>,
};

export default function SkeletonPageHeaderToolbar(props: TProps) {
  const {width = 1180, children} = props;
  return (
    <UIBase className={styles['ui-skeleton-page-header-toolbar']}>
      <Box margin={[0, 'auto']} width={width}>
        <SpacerBox height={46}>{children}</SpacerBox>
      </Box>
    </UIBase>
  );
}
