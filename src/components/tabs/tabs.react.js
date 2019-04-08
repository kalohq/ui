/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './tabs.css';

type TabsProps = {
  children: React$Node,
  className?: string,
};

export default function Tabs(props: TabsProps) {
  const {children, className, ...otherProps} = props;

  return (
    <UIBase
      component="nav"
      className={cx(
        {
          [styles['ui-tabs']]: true,
        },
        className
      )}
      {...otherProps}
    >
      <UIBase
        component="ul"
        role="menubar"
        className={cx({
          [styles['ui-tabs__inner']]: true,
        })}
        {...otherProps}
      >
        {children}
      </UIBase>
    </UIBase>
  );
}
