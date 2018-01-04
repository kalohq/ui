/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {isString} from 'lodash';

import {Box} from '../../layout';
import Icon from '../../icon';

import styles from './paper-menu-item.css';

type Props = {
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
  minWidth?: number,
};

const DEFAULT_HEIGHT = 52;

/**
 * Generic item container for use in paper menus
 */
export default function PaperMenuItem(props: Props) {
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
    component = Box,
    minWidth,
    iconAfter,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles.root]: true,
      [styles.highlighted]: highlighted,
      [styles.active]: active,
      [styles.success]: success,
      [styles.disabled]: disabled,
    },
    className
  );

  return (
    <Box
      className={_classNames}
      flexDirection="row"
      minHeight={DEFAULT_HEIGHT}
      minWidth={minWidth ? minWidth : 'auto'}
      alignItems="center"
      alignContent="center"
      onClick={onClick}
      name={name}
      component={component}
      {...otherProps}
    >
      {icon ? (
        <Box marginRight={10}>
          {isString(icon) ? <Icon size={16}>{String(icon)}</Icon> : icon}
        </Box>
      ) : null}

      <Box flexDirection="row" className={styles.content}>
        {children}
      </Box>

      {iconAfter ? (
        <Box marginLeft={10}>
          {isString(iconAfter) ? (
            <Icon size={16}>{String(iconAfter)}</Icon>
          ) : (
            iconAfter
          )}
        </Box>
      ) : null}
    </Box>
  );
}
