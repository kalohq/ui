/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {parseStyleProps} from 'utils/style';

import styles from './icon.css';

import type {
  ICON_SIZE,
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

type Props = {
  children?: React.Node,
  size?: ICON_SIZE,
  color?: ICON_COLOR,
  family?: ICON_FAMILY,
  weight?: ICON_WEIGHT,
  className?: string,
  onClick?: Function,
};

const isString = (test: any): boolean => typeof test === 'string';

export default function Icon(props: Props) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    weight = DEFAULT_WEIGHT,
    family = DEFAULT_FAMILY,
    className,
    onClick,
    ...otherProps
  } = props;

  const {unstyledProps, style} = parseStyleProps(otherProps);

  return (
    <i
      className={cx(
        {
          [styles.root]: true,
          [styles[`size-${size}`]]: !!size,
          [styles[`family-${family}`]]: true,
          [styles[`weight-${weight}`]]: true,
          [styles[`color-${color}`]]: true,
          [styles.interactive]: !!onClick,
        },
        className
      )}
      onClick={onClick}
      style={style}
      {...unstyledProps}
    >
      {family === 'fontello' && isString(children)
        ? FONTELLO_ICONS[String(children)] || children
        : children}
    </i>
  );
}
