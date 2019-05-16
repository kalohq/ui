import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './jumbo-button.css';

const JumboButton = props => {
  const {
    icon,
    children,
    active,
    component = 'button',
    onClick,
    ...otherProps
  } = props;

  const _classNames = cx({
    [styles['ui-jumbo-btn']]: true,
    [styles['ui-jumbo-btn--active']]: Boolean(active),
  });

  return (
    <UIBase
      component={component}
      onClick={onClick}
      className={_classNames}
      {...otherProps}
    >
      {icon && (
        <Icon
          className={styles['ui-jumbo-btn__icon']}
          size={36}
          color="navy800"
        >
          {icon}
        </Icon>
      )}
      {children}
    </UIBase>
  );
};

JumboButton.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string,
  component: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default JumboButton;
