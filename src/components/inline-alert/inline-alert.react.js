import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './inline-alert.module.css';

const TYPE_ICON_MAP = {
  info: 'info',
  error: 'highlight_off',
  warning: 'error_outline',
  confirmation: 'check_circle',
};

const InlineAlert = props => {
  const {children, type = 'info'} = props;

  const _classNames = cx({
    [styles['ui-inline-alert']]: true,
    [styles[`ui-inline-alert--${type}`]]: true,
  });

  return (
    <UIBase className={_classNames}>
      <Icon size={18} color="currentColor">
        {TYPE_ICON_MAP[type]}
      </Icon>
      <span className={styles['ui-inline-alert__content']}>{children}</span>
    </UIBase>
  );
};

InlineAlert.propTypes = {
  children: PropTypes.string,
  /** 'info' | 'warning' | 'error' | 'confirmation' */
  type: PropTypes.oneOf(['info', 'warning', 'error', 'confirmation']),
};

export default InlineAlert;
