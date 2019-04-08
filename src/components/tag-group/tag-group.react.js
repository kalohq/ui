/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';
import Text from '../text';

import styles from './tag-group.css';

type TProps = {
  children: Iterable<React.Element<*>>,
  limit?: number,
  showOverflow?: boolean,
  className?: string,
};

export default function TagGroup(props: TProps) {
  const {children, limit, showOverflow, className, ...otherProps} = props;

  const limitedChildren = limit ? [...children].slice(0, limit) : [...children];

  const _classNames = cx(
    {
      [styles['ui-tag-group']]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames} {...otherProps}>
      {React.Children.map(
        limitedChildren.slice(0, limit),
        child =>
          child &&
          React.cloneElement(child, {
            marginRight: 8,
            marginBottom: 4,
            marginTop: 4,
          })
      )}
      {limit && showOverflow && [...children].length > limit && (
        <Text size="extra-small" color="navy600">
          +{[...children].length - limit}
        </Text>
      )}
    </UIBase>
  );
}
