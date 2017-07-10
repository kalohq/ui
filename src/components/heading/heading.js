/* @flow */
import React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import Text from '../text';

import styles from './heading.css';

import type {HEADING_NUMBER, HEADING_HOVER} from './constants';

import type {TEXT_COLOR, TEXT_SIZE} from '../text/constants';

type headingProps = {
  children: React$Element<*>,
  className?: string,
  number: HEADING_NUMBER,
  color?: TEXT_COLOR,
  size?: TEXT_SIZE,
  flex?: boolean,
  border?: boolean,
  hover?: HEADING_HOVER,
  icon?: string,
  iconAfter?: boolean,
  iconPadding?: number,
};

export default function Heading(props: headingProps) {
  const {
    children,
    number = 3,
    color = 'charcoal',
    icon = false,
    size = 'small',
    iconAfter = false,
    hover = false,
    iconPadding = 10,
    className,
    ...otherProps
  } = props;

  const DOMElement = `h${number}`;

  return (
    <Text
      component={DOMElement}
      size={size}
      interactive={hover === 'interactive'}
      color={color}
      className={cx(
        {
          [styles.root]: true,
        },
        className
      )}
      {...otherProps}
    >
      {icon
        ? <Icon
            size={size === 'extra-large' ? 24 : 14}
            color={color}
            paddingRight={iconPadding}
          >
            {icon}
          </Icon>
        : null}
      {children}
      {iconAfter
        ? <Icon
            size={size === 'extra-large' ? 24 : 14}
            color={color}
            paddingLeft={iconPadding}
          >
            {iconAfter}
          </Icon>
        : null}
    </Text>
  );
}
