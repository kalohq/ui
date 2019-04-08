/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './lozenge.css';

type TProps = {
  children: string,
  variant?: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'grey',
  className?: string,
};

export default function Lozenge(props: TProps) {
  const {variant = 'blue', children, className, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles['ui-lozenge']]: true,
      [styles[`ui-lozenge--variant-${variant}`]]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames} title={String(children)} {...otherProps}>
      {children}
    </UIBase>
  );
}
