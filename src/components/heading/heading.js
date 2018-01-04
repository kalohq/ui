/* @flow */
import * as React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import Text from '../text';

import styles from './heading.css';

import type {HEADING_HOVER} from './constants';

import type {TEXT_COLOR, TEXT_SIZE} from '../text/constants';

type Props = {
  children: React.Node,
  className?: string,
  color?: TEXT_COLOR,
  size?: TEXT_SIZE,
  flex?: boolean,
  hover?: HEADING_HOVER,
  icon?: string,
  iconAfter?: string,
  iconPadding?: number,
};

export default function Heading(props: Props) {
  const {
    children,
    color = 'navy700',
    icon = false,
    size = 'small',
    iconAfter,
    hover = false,
    iconPadding = 10,
    className,
    ...otherProps
  } = props;

  return (
    <Text
      size={size}
      interactive={hover === 'interactive'}
      display="block"
      color={color}
      className={cx(styles.root, className)}
      {...otherProps}
    >
      {icon ? (
        <Icon
          size={size === 'extra-large' ? 24 : 14}
          color={color}
          paddingRight={iconPadding}
        >
          {icon}
        </Icon>
      ) : null}
      {children}
      {iconAfter ? (
        <Icon
          size={size === 'extra-large' ? 24 : 14}
          color={color}
          paddingLeft={iconPadding}
        >
          {iconAfter}
        </Icon>
      ) : null}
    </Text>
  );
}
