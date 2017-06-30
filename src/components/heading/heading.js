/* @flow */
import React from 'react';
import cx from 'classnames';
import {parseStyleProps} from 'utils/style';
import Icon from '../icon';

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
    margin = 'none',
    color = 'dark-grey',
    flex = false,
    border = false,
    multiline = false,
    align = 'none',
    hover = 'none',
    icon = false,
    iconAfter = false,
    iconPadding = 10,
    ...otherProps
  } = props;

  const DOMElement = `h${number}`;
  const propStyle = otherProps.style;
  const {unstyledProps, style} = parseStyleProps(otherProps);

  return (
    <DOMElement
      className={cx({
        [styles.root]: true,
        [styles[`weight-${weight}`]]: true,
        [styles[`size-${size}`]]: true,
        [styles[`color-${color}`]]: true,
        [styles[`margin-${margin}`]]: true,
        [styles[`align-${align}`]]: true,
        [styles[`hover-${hover}`]]: true,
        [styles.multiline]: multiline,
        [styles.flex]: flex,
        [styles.border]: border,
      })}
      style={{...style, ...propStyle}}
      {...unstyledProps}
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
    </DOMElement>
  );
}
