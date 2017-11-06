/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {isString} from 'lodash';

import {Box} from '../../layout';
import Icon from '../../icon';

import styles from './paper-menu-item.css';

function renderIcon(icon) {
  return isString(icon) ? (
    <Icon size={16}>{icon}</Icon>
  ) : isValidElement(icon) ? (
    icon
  ) : (
    <Icon size={16} {...icon} />
  );
}

type Props = {
  icon?: React.Node | string,
  children?: React.Node,
  active?: boolean,
  success?: boolean,
  disabled?: boolean,
  highlighted?: boolean,
  padded?: boolean,
  name?: string,
  className?: string,
  onClick?: Function,
};

const DEFAULT_HEIGHT = 60;

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
    padded,
    name,
    success,
    className,
    onClick,
    ...otherProps
  } = props;

  const _classNames = cx({
    [styles.root]: true,
    [styles.highlighted]: highlighted,
    [styles.active]: active,
    [styles.success]: success,
    [styles.disabled]: disabled,
    [className]: !!className,
  });

  return (
    <Box
      className={_classNames}
      flexDirection="row"
      minHeight={DEFAULT_HEIGHT}
      alignItems="center"
      alignContent="center"
      padding={padded ? [10, 20, 10, 17] : 0}
      onClick={onClick}
      name={name}
      {...otherProps}
    >
      {icon ? <Box marginRight={10}>{renderIcon(icon)}</Box> : null}

      <Box flexDirection="row" className={styles.content}>
        {children}
      </Box>
    </Box>
  );
}
