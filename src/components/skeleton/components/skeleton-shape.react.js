import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Box} from '../../layout';

import {UIBase} from '../../layout';

import styles from '../skeleton.css';

const SkeletonShape = props => {
  const {
    children,
    className,
    shape = 'square',
    width,
    height,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-skeleton-shape']]: true,
      [styles[`ui-skeleton-shape--${String(shape)}`]]: true,
    },
    className
  );
  return (
    <UIBase className={_classNames} style={{width, height}} {...otherProps}>
      {children}
    </UIBase>
  );
};

SkeletonShape.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** ['circle' | 'square'] */
  shape: PropTypes.oneOf(['circle', 'square']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
