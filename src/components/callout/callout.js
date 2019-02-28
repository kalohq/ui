/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './callout.css';

type TProps = {
  children: string | React.Element<*>,
  className?: Object,
  variant?: 'blue',
};

export default function Callout(props: TProps) {
  const {children, variant = 'blue', className, ...otherProps} = props;
  const _classNames = cx(
    {
      [styles['ui-callout']]: true,
      [styles[`ui-callout--variant-${variant}`]]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames} {...otherProps}>
      {children}
    </UIBase>
  );
}
