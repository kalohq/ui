/* @flow */
import * as React from 'react';
import cx from 'classnames';

import styles from './avatar-group.css';

type TProps = {
  /** An iterable set of children Avatar components */
  children: Iterable<React.Element<*>>,
};

export default function AvatarGroup(props: TProps) {
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
            child && // $FlowFixMe
            React.cloneElement(child, {
              isGrouped: true,
            })
        )}
      {numberOfChildren > 5 && (
        <span className="ui-avatar--medium ui-avatar-group__chip">
          {numberOfChildren - 5}
        </span>
      )}
    </div>
  );
}
