import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './lozenge.module.css';

const Lozenge = props => {
  const {variant = 'blue', children, className, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles['ui-lozenge']]: true,
      [styles[`ui-lozenge--variant-${variant}`]]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames} title={String(children)} {...otherProps}>
      {children}
    </UIBase>
  );
};

Lozenge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  /** 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'grey' */
  variant: PropTypes.oneOf([
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'grey',
  ]),
  className: PropTypes.string,
};

export default Lozenge;
