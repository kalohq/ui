/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './seamless-button.css';

type TProps = {
  onClick?: () => void,
  name?: string,
  className?: string,
  size?: 'small' | 'medium' | 'large',
  icon?: string,
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
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-seamless-button']]: true,
      [styles[`ui-seamless-button--${size}`]]: true,
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
