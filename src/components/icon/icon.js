/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {UIBase} from '../layout';

import type {ICON_SIZE, ICON_COLOR} from './constants';
import {ICONS, DEFAULT_SIZE, DEFAULT_COLOR} from './constants';

import styles from './icon.css';
import fills from '../../styles/kalo-ui-fills.css';

type Props = {
  children: $Keys<typeof ICONS>,
  size?: ICON_SIZE,
  color?: ICON_COLOR,
  className?: string,
  onClick?: Function,
  theme?: Object,
  title?: string,
};

export default function Icon(props: Props) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    className,
    onClick,
    title,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-icon']]: true,
      [styles[`ui-icon--size-${size}`]]: true,
      [styles['ui-icon--interactive']]: Boolean(onClick),
      [fills[`fill-${color}`]]: true,
    },
    className
  );

  return (
    <UIBase
      component="i"
      onClick={onClick}
      title={title}
      className={_classNames}
      {...otherProps}
    >
      <svg width={size} height={size} aria-hidden="true">
        {title ? <title>{title}</title> : null}
        <use xlinkHref={`#${children}`} />
      </svg>
    </UIBase>
  );
}
