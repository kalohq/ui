import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './tabs.css';

const Tab = props => {
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
};

Tab.propTypes = {
  /** The contents of the tab */
  children: PropTypes.node.isRequired,
  /** Any classes to pass down */
  className: PropTypes.string,
  /** Is the tab in a selected/active state */
  active: PropTypes.bool,
  /** Prevents the user from interacting, and makes the tab visually disabled */
  disabled: PropTypes.bool,
};

export default Tab;
