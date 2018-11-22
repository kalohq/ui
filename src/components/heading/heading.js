/* @flow */
import * as React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import {UIBase} from '../layout';

import type {TEXT_COLOR} from '../text/constants';

import styles from './heading.css';
import colors from '../../styles/kalo-ui-colors.css';

type TProps = {
  /** The heading content */
  children: React.Node,
  /** Sets the text color and fill color of any child icon */
  color?: TEXT_COLOR,
  /** Sets the size of the heading */
  size?: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small',
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
  /** Should the heading wrap on to multiple lines? */
  multiline?: boolean,
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
    align = 'unset',
    multiline = false,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles.heading]: true,
      [styles[`heading--${size}`]]: true,
      [styles[`heading--align-${align}`]]: true,
      [styles['heading--interactive']]: hover === 'interactive',
      [styles['heading--ellipsis']]: !multiline,
      [colors[`color-${color}`]]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames} component={component} {...otherProps}>
      {icon && (
        <Icon
          size={size === 'extra-large' ? 24 : 14}
          color={color}
          paddingRight={iconPadding}
        >
          {icon}
        </Icon>
      )}
      {children}
      {iconAfter && (
        <Icon
          size={size === 'extra-large' ? 24 : 14}
          color={color}
          paddingLeft={iconPadding}
        >
          {iconAfter}
        </Icon>
      )}
    </UIBase>
  );
}
