import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './avatar-group.css';
import avatarStyles from '../avatar/avatar.css';

const AvatarGroup = props => {
  const {children} = props;

  const _classNames = cx(styles['ui-avatar-group']);

  const numberOfChildren = Number([...children].length);

  const slicedChildren =
    numberOfChildren >= 5 ? [...children].slice(0, 5) : children;

  return (
    <div className={_classNames}>
      {slicedChildren &&
        React.Children.map(
          slicedChildren,
          child =>
            child &&
            React.cloneElement(child, {
              isGrouped: true,
            })
        )}
      {numberOfChildren > 5 && (
        <span
          className={cx(
            avatarStyles['ui-avatar--medium'],
            styles['ui-avatar-group__chip']
          )}
        >
          {numberOfChildren - 5}
        </span>
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  /** An iterable set of children Avatar components */
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default AvatarGroup;
