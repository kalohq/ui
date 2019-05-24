import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './tooltip-box.css';

const SUPPORTED_DIRECTIONS = ['right'];

const TooltipBox = props => {
  const {children, text, show, className, ...otherProps} = props;

  const classnames = {
    container: cx(styles['tooltip-container'], className),
    bubble: cx(styles['tooltip-bubble'], {
      [styles[`tooltip-bubble--${show}`]]: SUPPORTED_DIRECTIONS.includes(show),
    }),
  };

  return (
    <div className={classnames.container} {...otherProps}>
      {children}
      <div className={classnames.bubble}>{text}</div>
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
  /**
   * the direction of the tooltip ['right'] (if not indicated pops from the bottom).
   */
  show: PropTypes.oneOf(['right']),
  className: PropTypes.string,
};

export default TooltipBox;
