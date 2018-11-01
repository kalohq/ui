/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './avatar.core.css';

type TProps = {
  src: string,
  size?: 'small' | 'medium' | 'large',
};

export default function Avatar(props: TProps) {
  const {src, size = 'medium'} = props;

  const _classNames = cx({
    [styles['ui-avatar']]: true,
    [styles[`ui-avatar--${size}`]]: true,
  });

  return (
    <UIBase component="figure" className={_classNames}>
      <span
        className={styles['ui-avatar__avatar']}
        role="img"
        style={{backgroundImage: `url(${src})`}}
      />
    </UIBase>
  );
}
