import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';
import Text from '../text';

import styles from './tag-group.module.css';

const TagGroup = props => {
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
};

TagGroup.propTypes = {
  children: PropTypes.array,
  limit: PropTypes.number,
  showOverflow: PropTypes.bool,
  className: PropTypes.string,
};

export default TagGroup;
