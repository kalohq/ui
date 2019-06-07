import * as React from 'react';
import PropTypes from 'prop-types';
import {isString} from 'lodash';
import cx from 'classnames';

import {UIBase} from '../../layout';
import Icon from '../../icon';

import styles from './paper-menu-item.module.css';

/**
 * Generic item container for use in paper menus
 */
const PaperMenuItem = props => {
  const {
    icon,
    children,
    active,
    disabled,
    highlighted,
    name,
    className,
    onClick,
    component = 'div',
    minWidth,
    iconAfter,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-paper-menu-item']]: true,
      [styles['ui-paper-menu-item--highlighted']]: highlighted,
      [styles['ui-paper-menu-item--disabled']]: disabled,
      [styles['ui-paper-menu-item--active']]: active,
    },
    className
  );

  return (
    <UIBase
      style={{minWidth: minWidth ? minWidth : 'auto'}}
      onClick={onClick}
      name={name}
      component={component}
      className={_classNames}
      {...otherProps}
    >
      {icon && (
        <UIBase marginRight={10}>
          {isString(icon) ? <Icon size={16}>{String(icon)}</Icon> : icon}
        </UIBase>
      )}

      <UIBase className={styles['ui-paper-menu-item__content']}>
        {children}
      </UIBase>

      {iconAfter && (
        <UIBase marginLeft={10}>
          {isString(iconAfter) ? (
            <Icon size={16}>{String(iconAfter)}</Icon>
          ) : (
            iconAfter
          )}
        </UIBase>
      )}
    </UIBase>
  );
};

PaperMenuItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  iconAfter: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
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
  minWidth: PropTypes.number,
};

export default PaperMenuItem;
