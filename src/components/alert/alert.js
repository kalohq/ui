/* @flow */
import React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import Text from '../text';
import {Box} from '../layout';

import styles from './alert.css';

const TYPE_COLOR_MAP = {
  info: 'blue',
  error: 'red',
  warning: 'orange',
  confirmation: 'green',
};

const TYPE_ICON_MAP = {
  info: 'info_outline',
  error: 'highlight_off',
  warning: 'error_outline',
  confirmation: 'check_circle',
};

type TProps = {
  children: React$Element<*>,
  type: $Keys<typeof TYPE_COLOR_MAP>,
  showIcon?: boolean,
  justifyContent?: 'left' | 'center',
};

export default function Alert(props: TProps) {
  const {
    children,
    showIcon,
    type,
    justifyContent = 'center',
    ...otherProps
  } = props;

  return (
    <Box
      className={cx({
        [styles.root]: true,
        [styles[`type-${type}`]]: true,
      })}
      padding={[8, 16]}
      flexDirection="row"
      alignItems="center"
      justifyContent={justifyContent}
      {...otherProps}
    >
      {showIcon
        ? <Icon color={TYPE_COLOR_MAP[type]} marginRight={8}>
            {TYPE_ICON_MAP[type]}
          </Icon>
        : null}
      <Text color={TYPE_COLOR_MAP[type]}>
        {children}
      </Text>
    </Box>
  );
}
