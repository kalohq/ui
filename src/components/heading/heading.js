/* @flow */
import * as React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import {UIBase} from '../layout';

import type {TEXT_COLOR, TEXT_SIZE} from '../text/constants';

import styles from './heading.core.css';
import colors from '../../styles/colors.css';

type TProps = {
  /** The heading content */
  children: React.Node,
  /** Sets the text color and fill color of any child icon */
  color?: TEXT_COLOR,
  /** Sets the size of the heading */
  size?: TEXT_SIZE,
  /** Sets interactive styles for the underlying text component - See Text component */
  hover?: 'underline' | 'none',
  /** Displays an icon before the heading */
  icon?: string,
  /** Displays an icon after the heading */
  iconAfter?: string,
  /** Adds padding between the icon and heading text */
  iconPadding?: number,
  /** The underlying component */
  component?: string,
  /** Class to pass down */
  className?: string,
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
    component = 'span',
    className,
    ...otherProps
  } = props;

  const legacySizeMap = {
    'extra-large': 800,
    large: 700,
    medium: 600,
    small: 600,
    '800': 800,
    '700': 700,
    '600': 600,
    '500': 500,
    '400': 400,
  };

  const _classNames = cx(
    {
      [styles.heading]: true,
      [styles[`heading--${legacySizeMap[size]}`]]: true,
      [colors[`color-${color}`]]: true,
    },
    className
  );

  return (
    <UIBase
      interactive={hover === 'interactive'}
      className={_classNames}
      component={component}
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
    </UIBase>
  );
}
