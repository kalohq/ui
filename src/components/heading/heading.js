/* @flow */
import React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import Text from '../text';
import {Block} from '../layout';

import styles from './heading.css';

import type {
  HEADING_NUMBER,
  HEADING_WEIGHT,
  HEADING_SIZE,
  HEADING_MARGIN,
  HEADING_COLOR,
  HEADING_ALIGN,
  HEADING_HOVER,
} from './constants';

type headingProps = {
  children: React$Element<*>,
  className?: string,
  number: HEADING_NUMBER,
  weight?: HEADING_WEIGHT,
  size?: HEADING_SIZE,
  margin?: HEADING_MARGIN,
  color?: HEADING_COLOR,
  flex?: boolean,
  border?: boolean,
  multiline?: boolean,
  align?: HEADING_ALIGN,
  hover?: HEADING_HOVER,
  icon?: string,
  iconAfter?: boolean,
  iconPadding?: number,
};

export default function Heading(props: headingProps) {
  const {
    children,
    number = 3,
    weight = 'normal',
    size = 'small',
    color = 'charcoal',
    icon = false,
    iconAfter = false,
    iconPadding = 10,
    className,
    ...otherProps
  } = props;

  const DOMElement = `h${number}`;

  return (
    <Text
      component={Block}
      domElement={DOMElement}
      weight={weight}
      size={size}
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
            color="grey"
            paddingLeft={iconPadding}
          >
            {iconAfter}
          </Icon>
        : null}
    </Text>
  );
}
