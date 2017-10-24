/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {parseStyleProps} from 'utils/style';

import styles from './icon.css';

import type {ICON_SIZE} from './constants';

import {ICONS, ICON_COLORS, DEFAULT_SIZE, DEFAULT_COLOR} from './constants';

type Props = {
  children: string,
  size?: ICON_SIZE,
  color?: $Keys<typeof ICON_COLORS>,
  className?: string,
  onClick?: Function,
};

export default function Icon(props: Props) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    className,
    onClick,
    ...otherProps
  } = props;

  const {unstyledProps, style} = parseStyleProps(otherProps);

  if (!ICONS.properties[children]) {
    console.error(`UI ICON - ${children} is not a defined icon`);
  }

  return (
    <i
      className={cx(
        {
          [styles.root]: true,
          [styles.interactive]: !!onClick,
        },
        className
      )}
      onClick={onClick}
      style={style}
      {...unstyledProps}
    >
      <svg
        width={size}
        height={size}
        fill={ICON_COLORS.properties[color].hex}
        aria-hidden="true"
      >
        <title>{children}</title>
        <use href={`#${children}`} />
      </svg>
    </i>
  );
}
