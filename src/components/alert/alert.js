/* @flow */
import * as React from 'react';
import cx from 'classnames';

import Icon from '../icon';
import {UIBase} from '../layout';

import coreStyles from './alert.core.css';

const TYPE_ICON_MAP = {
  info: 'info_outline',
  error: 'highlight_off',
  warning: 'error_outline',
  confirmation: 'check_circle',
};

type TProps = {
  children: React.Node,
  type: $Keys<typeof TYPE_ICON_MAP>,
  showIcon?: boolean,
  justifyContent?: 'left' | 'center',
  className?: string | Object,
};

export default function Alert(props: TProps) {
  const {
    children,
    showIcon,
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
          [coreStyles['ui-alert']]: true,
          [coreStyles[`ui-alert--${type}`]]: true,
        },
        className
      )}
      {...otherProps}
    >
      {showIcon && (
        <Icon color="currentColor" marginRight={8}>
          {TYPE_ICON_MAP[type]}
        </Icon>
      )}
      {children}
    </UIBase>
  );
}
