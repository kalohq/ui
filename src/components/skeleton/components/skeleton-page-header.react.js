import React from 'react';
import cx from 'classnames';

import {UIBase} from '../../layout';

import styles from '../skeleton.module.css';

/**
 * Skeleton page header
 */

export default function SkeletonPageHeader(props) {
  const {children, className, ...otherProps} = props;
  const _classNames = cx(
    {
      [styles['ui-skeleton-page-header']]: true,
    },
    className
  );
  return (
    <UIBase className={_classNames} {...otherProps}>
      {children}
    </UIBase>
  );
}
