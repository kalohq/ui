import * as React from 'react';
import PropTypes from 'prop-types';
import {isString} from 'lodash';
import cx from 'classnames';

import {Box, UIBase} from '../layout';
import Icon from '../icon';

import styles from './drop-menu.module.css';

/**
 * Generic item container for use in paper menus
 */
const DropMenuItem = props => {
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
};

DropMenuItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  active: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  padded: PropTypes.bool,
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  component: PropTypes.any,
  isSubItem: PropTypes.bool,
  isHighlighted: PropTypes.bool,
};

export default DropMenuItem;
