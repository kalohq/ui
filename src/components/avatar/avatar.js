/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './avatar.css';

type TProps = {
  src: string,
  size?: 'small' | 'medium' | 'large',
  className: string,
};

export default function Avatar(props: TProps) {
  const {src, size = 'medium', className, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles['ui-avatar']]: true,
      [styles[`ui-avatar--${size}`]]: true,
    },
    className
  );

  return (
    <UIBase component="figure" className={_classNames} {...otherProps}>
      <span
        className={styles['ui-avatar__avatar']}
        role="img"
        style={{backgroundImage: `url(${src})`}}
      />
    </UIBase>
  );
}
