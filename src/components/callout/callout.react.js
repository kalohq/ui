import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './callout.css';

const Callout = props => {
  const {children, variant = 'blue', className, ...otherProps} = props;
  const _classNames = cx(
    {
      [styles['ui-callout']]: true,
      [styles[`ui-callout--variant-${variant}`]]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames} {...otherProps}>
      {children}
    </UIBase>
  );
};

Callout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.object,
  /** 'blue' */
  variant: PropTypes.oneOf(['blue']),
};

export default Callout;
