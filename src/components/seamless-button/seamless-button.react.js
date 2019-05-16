import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import styles from './seamless-button.css';

/**
 * A thing which doesn’t look like a button but makes things happen when you
 * click it. Top-notch accessibility included!
 */
const SeamlessButton = props => {
  const {
    onClick,
    name,
    size = 'medium',
    className,
    icon = 'add',
    active,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-seamless-button']]: true,
      [styles[`ui-seamless-button--${size}`]]: true,
      [styles[`ui-seamless-button--active`]]: Boolean(active),
    },
    className
  );

  return (
    <UIBase
      cursor="pointer"
      onClick={onClick}
      name={name}
      component="button"
      className={_classNames}
      {...otherProps}
    >
      <Icon size={20}>{icon}</Icon>
    </UIBase>
  );
};

SeamlessButton.propTypes = {
  /** An onclick event to call */
  onClick: PropTypes.func,
  /** A name to pass down to the DOM button */
  name: PropTypes.string,
  /** Any classes to pass down */
  className: PropTypes.string,
  /** The physical size of the button */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** An icon to display as a child */
  icon: PropTypes.string,
  /** Forces the button to be in active state. */
  active: PropTypes.bool,
};

export default SeamlessButton;
