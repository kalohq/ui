import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './tag.css';

const Tag = props => {
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
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  avatar: PropTypes.node,
  isLink: PropTypes.bool,
  onRemove: PropTypes.func,
};

export default Tag;
