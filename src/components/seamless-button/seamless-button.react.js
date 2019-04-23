/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './seamless-button.css';

type TProps = {
  /** An onclick event to call */
  onClick?: () => void,
  /** A name to pass down to the DOM button */
  name?: string,
  /** Any classes to pass down */
  className?: string,
  /** The physical size of the button */
  size?: 'small' | 'medium' | 'large',
  /** An icon to display as a child */
  icon?: string,
  /** Forces the button to be in active state. */
  active?: boolean,
};
/**
 * A thing which doesn’t look like a button but makes things happen when you
 * click it. Top-notch accessibility included!
 */
export default function SeamlessButton(props: TProps) {
  const {
    onClick,
    name,
    size = 'medium',
    className,
    icon = 'add',
    active,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-seamless-button']]: true,
      [styles[`ui-seamless-button--${size}`]]: true,
      [styles[`ui-seamless-button--active`]]: Boolean(active),
    },
    className
  );

  return (
    <UIBase
      cursor="pointer"
      onClick={onClick}
      name={name}
      component="button"
      className={_classNames}
      {...otherProps}
    >
      <Icon size={20}>{icon}</Icon>
    </UIBase>
  );
}
