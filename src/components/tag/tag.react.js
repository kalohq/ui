/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './tag.module.css';

type TProps = {
  children: string,
  avatar?: React$Node,
  isLink?: boolean,
  onRemove?: Function,
};

export default function Tag(props: TProps) {
  const {children, avatar, isLink, onRemove, ...otherProps} = props;

  const _classNames = cx({
    [styles['ui-tag']]: true,
    [styles['ui-tag--link']]: isLink,
    [styles['ui-tag--avatar']]: avatar,
    [styles['ui-tag--removable']]: !!onRemove,
  });

  return (
    <UIBase
      component="span"
      className={_classNames}
      title={String(children)}
      {...otherProps}
    >
      {avatar}
      <span className={styles['ui-tag__inner']}>{children}</span>
      {onRemove && (
        <button className={styles['ui-tag__remove']} onClick={onRemove}>
          <Icon size={12}>clear</Icon>
        </button>
      )}
    </UIBase>
  );
}
