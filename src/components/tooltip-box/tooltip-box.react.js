import React from 'react';
import PropTypes from 'prop-types';

import styles from './tooltip-box.css';

const TooltipBox = props => {
  const {children, text, ...otherProps} = props;

  return (
    <div className={styles['tooltip-container']} {...otherProps}>
      {children}
      <div className={styles['tooltip-bubble']}>{text}</div>
    </div>
  );
};

TooltipBox.propTypes = {
  /**
   * The text of the tooltip.
   */
  text: PropTypes.string.isRequired,
  /**
   * It's the element that triggers the visibility of the tooltip.
   */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TooltipBox;
