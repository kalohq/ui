import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../icon';
import {UIBase} from '../layout';

import styles from './alert.module.css';

const TYPE_ICON_MAP = {
  info: 'info_outline',
  error: 'highlight_off',
  warning: 'error_outline',
  confirmation: 'check_circle',
};

const Alert = props => {
  const {
    children,
    title,
    showIcon = true,
    icon,
    type = 'info',
    justifyContent = 'center',
    className,
    ...otherProps
  } = props;

  return (
    <UIBase
      justifyContent={justifyContent}
      role="alert"
      type={type}
      className={cx(
        {
          [styles['ui-alert']]: true,
          [styles[`ui-alert--${type}`]]: true,
        },
        className
      )}
      {...otherProps}
    >
      {showIcon && (
        <Icon color="currentColor">{icon ? icon : TYPE_ICON_MAP[type]}</Icon>
      )}
      <div className={styles['ui-alert__content']}>
        {title && <span className={styles['ui-alert__title']}>{title}</span>}
        {children && (
          <span className={styles['ui-alert__message']}>{children}</span>
        )}
      </div>
    </UIBase>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
  /** 'info' | 'error' | 'warning' | 'confirmation' */
  type: PropTypes.oneOf(['info', 'error', 'warning', 'confirmation'])
    .isRequired,
  showIcon: PropTypes.bool,
  /** 'left' | 'center' | 'flex-start' */
  justifyContent: PropTypes.oneOf(['left', 'center', 'flex-start']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Alert;
