/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './lozenge.core.css';

type TProps = {
  children: string,
  variant?: 'blue' | 'green' | 'orange' | 'purple' | 'red',
};

export default function Lozenge(props: TProps) {
  const {variant = 'blue', children, ...otherProps} = props;

  const _classNames = cx({
    [styles['ui-lozenge']]: true,
    [styles[`ui-lozenge--variant-${variant}`]]: true,
  });

  return (
    <UIBase className={_classNames} {...otherProps}>
      {children}
    </UIBase>
  );
}
