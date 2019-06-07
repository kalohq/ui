/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../../layout';

import styles from '../skeleton.module.css';

type TProps = {
  children?: React$Node,
  className?: string | Object,
  shape?: 'circle' | 'square',
  width?: number | string,
  height?: number | string,
};

export default function SkeletonShape(props: TProps) {
  const {
    children,
    className,
    shape = 'square',
    width,
    height,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-skeleton-shape']]: true,
      [styles[`ui-skeleton-shape--${String(shape)}`]]: true,
    },
    className
  );
  return (
    <UIBase className={_classNames} style={{width, height}} {...otherProps}>
      {children}
    </UIBase>
  );
}
