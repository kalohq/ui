/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './tabs.css';

type TProps = {
  /** The contents of the tab */
  children: React$Node,
  /** Any classes to pass down */
  className?: string,
  /** Is the tab in a selected/active state */
  active?: boolean,
  /** Prevents the user from interacting, and makes the tab visually disabled */
  disabled?: boolean,
};

export default function Tab(props: TProps) {
  const {children, className, active, disabled, ...otherProps} = props;

  return (
    <UIBase component="li">
      <UIBase
        role="menuitem"
        className={cx(
          {
            [styles['ui-tabs__tab']]: true,
            [styles['ui-tabs__tab--active']]: active,
            [styles['ui-tabs__tab--disabled']]: disabled,
          },
          className
        )}
        activeClassName={styles['ui-tabs__tab--active']}
        {...otherProps}
      >
        {children}
      </UIBase>
    </UIBase>
  );
}
