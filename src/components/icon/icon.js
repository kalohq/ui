/* @flow */
import React from 'react';
import cx from 'classnames';
import {pickStyles} from 'utils/style';

import styles from './icon.css';

import type {
  ICON_SIZE,
  ICON_THEME,
  ICON_COLOR,
  ICON_FAMILY,
  ICON_WEIGHT,
} from './constants';

import {
  DEFAULT_SIZE,
  DEFAULT_WEIGHT,
  DEFAULT_COLOR,
  DEFAULT_FAMILY,
  FONTELLO_ICONS,
} from './constants';

type iconProps = {
  children: 'string',
  size?: ICON_SIZE,
  theme?: ICON_THEME,
  color?: ICON_COLOR,
  family?: ICON_FAMILY,
  weight?: ICON_WEIGHT,
  className?: 'string',
  onClick?: Function,
};

export default function Icon(props: iconProps) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    weight = DEFAULT_WEIGHT,
    family = DEFAULT_FAMILY,
    theme,
    className,
    onClick,
    ...otherProps
  } = props;

  return (
    <i
      className={cx(
        {
          [styles.root]: true,
          [styles[`size-${size}`]]: !!size,
          [styles[`theme-${theme}`]]: !!theme,
          [styles[`family-${family}`]]: true,
          [styles[`weight-${weight}`]]: true,
          [styles[`color-${color}`]]: true,
          [styles.interactive]: !!onClick,
        },
        className
      )}
      onClick={onClick}
      {...pickStyles(otherProps)}
      {...otherProps}
    >
      {family === 'fontello' ? FONTELLO_ICONS[children] || children : children}
    </i>
  );
}
