/* @flow */
import * as React from 'react';
import {isString} from 'lodash';
import cx from 'classnames';

import {Box, UIBase} from '../layout';
import Icon from '../icon';

import styles from './drop-menu.module.css';

type TProps = {
  icon?: React.Node | string,
  iconAfter?: React.Node | string,
  children?: React.Node,
  active?: boolean,
  success?: boolean,
  disabled?: boolean,
  highlighted?: boolean,
  padded?: boolean,
  name?: string,
  className?: string,
  onClick?: ?Function,
  component?: any,
  isSubItem?: boolean,
  isHighlighted?: boolean,
};

/**
 * Generic item container for use in paper menus
 */
export default function DropMenuItem(props: TProps) {
  const {
    icon,
    children,
    active,
    disabled,
    highlighted,
    name,
    success,
    className,
    onClick,
    component = 'div',
    iconAfter,
    isSubItem,
    isHighlighted,
    ...otherProps
  } = props;

  return (
    <UIBase
      name={name}
      onClick={onClick}
      className={cx(
        {
          [styles['ui-drop-menu__item']]: true,
          [styles['ui-drop-menu__item--highlighted']]: !!highlighted,
          [styles['ui-drop-menu__item--active']]: !!active,
          [styles['ui-drop-menu__item--success']]: !!success,
          [styles['ui-drop-menu__item--disabled']]: !!disabled,
          [styles['ui-drop-menu__item--sub-item']]: !!isSubItem,
          [styles['ui-drop-menu__item--highlighted']]: !!isHighlighted,
        },
        className
      )}
      component={component}
      {...otherProps}
    >
      {icon && (
        <Box marginRight={10}>
          {isString(icon) ? <Icon size={16}>{String(icon)}</Icon> : icon}
        </Box>
      )}

      <span>{children}</span>

      {iconAfter && (
        <Box marginLeft={10}>
          {isString(iconAfter) ? (
            <Icon size={16}>{String(iconAfter)}</Icon>
          ) : (
            iconAfter
          )}
        </Box>
      )}
    </UIBase>
  );
}
