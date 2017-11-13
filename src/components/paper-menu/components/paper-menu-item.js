/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {Box} from '../../layout';
import Icon from '../../icon';

import styles from './paper-menu-item.css';

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
  onClick?: ?Function,
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
      alignItems="center"
      alignContent="center"
      onClick={onClick}
      name={name}
      {...otherProps}
    >
      {icon ? (
        <Box marginRight={10}>
          <Icon size={16}>{icon}</Icon>
        </Box>
      ) : null}

      <Box flexDirection="row" className={styles.content}>
        {children}
      </Box>
    </Box>
  );
}
