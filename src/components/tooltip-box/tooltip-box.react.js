import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './tooltip-box.css';
import Icon from '../icon';

const SUPPORTED_DIRECTIONS = ['right'];
const TYPE_ICON_MAP = {
  info: 'info_outline',
};

const TooltipBox = props => {
  const {children, text, show, className, type, ...otherProps} = props;

  const isTypeSupported = Boolean(TYPE_ICON_MAP[type]);

  const classnames = {
    container: cx(
      styles['tooltip-container'],
      {
        [styles[`tooltip-container--${type}`]]: isTypeSupported,
      },
      className
    ),
    bubble: cx(styles['tooltip-bubble'], {
      [styles[`tooltip-bubble--${show}`]]: SUPPORTED_DIRECTIONS.includes(show),
    }),
  };

  return (
    <div className={classnames.container} {...otherProps}>
      {children}{' '}
      {isTypeSupported && (
        <Icon color="currentColor">{TYPE_ICON_MAP[type]}</Icon>
      )}
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
  /**
   * the type of the tooltip box ['info']
   */
  type: PropTypes.oneOf(['info']),
  className: PropTypes.string,
};

export default TooltipBox;
