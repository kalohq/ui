/* @flow */
import * as React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import Text from '../text';

import styles from './heading.css';

import type {HEADING_HOVER} from './constants';

import type {TEXT_COLOR, TEXT_SIZE} from '../text/constants';

type TProps = {
  /** The heading content */
  children: React.Node,
  /** A class to pass down */
  className?: string,
  /** Sets the text color and fill color of any child icon */
  color?: TEXT_COLOR,
  /** Sets the size of the heading */
  size?: TEXT_SIZE,
  /** Sets interactive styles for the underlying text component - See Text component */
  hover?: HEADING_HOVER,
  /** Displays an icon before the heading */
  icon?: string,
  /** Displays an icon after the heading */
  iconAfter?: string,
  /** Adds padding between the icon and heading text */
  iconPadding?: number,
};

export default function Heading(props: TProps) {
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
