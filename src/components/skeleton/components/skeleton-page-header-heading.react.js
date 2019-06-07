import React from 'react';
import cx from 'classnames';

import {UIBase} from '../../layout';

import styles from '../skeleton.module.css';

/**
 * Skeleton page header heading
 */
export default function SkeletonPageHeaderHeading(props) {
  const {width, children, className, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles['ui-skeleton-page-header-heading']]: true,
    },
    className
  );
  return (
    <UIBase className={_classNames} style={{width}} {...otherProps}>
      {children}
    </UIBase>
  );
}
