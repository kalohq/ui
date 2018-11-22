/* @flow */
import React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './skill-tag.css';

type TProps = {
  /** The main tag label */
  children: string,
  /** A function to call when the tag is removed */
  onRemove?: Function,
};

export default function SkillTag(props: TProps) {
  const {children, onRemove, ...otherProps} = props;

  const _classNames = cx({
    [styles['ui-skill-tag']]: true,
    [styles['ui-skill-tag--removable']]: !!onRemove,
  });
  return (
    <UIBase className={_classNames} title={String(children)} {...otherProps}>
      <span className={styles['ui-skill-tag__inner']}>{children}</span>
      {onRemove && (
        <button className={styles['ui-skill-tag__remove']} onClick={onRemove}>
          <Icon size={12}>clear</Icon>
        </button>
      )}
    </UIBase>
  );
}
