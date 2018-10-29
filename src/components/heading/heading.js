/* @flow */
import * as React from 'react';
import cx from 'classnames';
import Icon from '../icon';
import {UIBase} from '../layout';

import type {TEXT_COLOR, TEXT_SIZE} from '../text/constants';

import styles from './heading.core.css';

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
};

// const StyledHeading = styled(Text)`
//   line-height: 1.25em !important;

//   > i {
//     position: relative;
//     left: 2px;
//     vertical-align: top;
//   }
// `;

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

  const _classNames = cx(
    {
      [styles[`heading--${size}`]]: true,
      [styles[`color-${color}`]]: true,
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
