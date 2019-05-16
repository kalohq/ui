import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './tabs.css';

const Tabs = props => {
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
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tabs;
