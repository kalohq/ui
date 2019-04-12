/* @flow */
import React from 'react';
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

type TProps = {
  children: string,
  type?: 'info' | 'warning' | 'error' | 'confirmation',
};

export default function InlineAlert(props: TProps) {
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
}
