import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../icon';
import {UIBase} from '../layout';

import {TEXT_COLOR} from '../text/constants';

import styles from './heading.css';
import colors from '../../design-tokens/kalo-ui-colors.css';

const Heading = props => {
  const {
    children,
    color = 'navy900',
    icon = false,
    size = 'small',
    iconAfter,
    hover = false,
    iconPadding = 10,
    component = 'span',
    className,
    align = 'unset',
    multiline = false,
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles.heading]: true,
      [styles[`heading--${size}`]]: true,
      [styles[`heading--align-${align}`]]: true,
      [styles['heading--interactive']]: hover === 'interactive',
      [styles['heading--ellipsis']]: !multiline,
      [colors[`color-${color}`]]: true,
    },
    className
  );

  return (
    <UIBase className={_classNames} component={component} {...otherProps}>
      {icon && (
        <Icon
          size={size === 'extra-large' ? 24 : 14}
          color={color}
          paddingRight={iconPadding}
        >
          {icon}
        </Icon>
      )}
      {children}
      {iconAfter && (
        <Icon
          size={size === 'extra-large' ? 24 : 14}
          color={color}
          paddingLeft={iconPadding}
        >
          {iconAfter}
        </Icon>
      )}
    </UIBase>
  );
};

Heading.propTypes = {
  /** The heading content */
  children: PropTypes.node.isRequired,
  /** Sets the text color and fill color of any child icon (TEXT_COLOR) */
  color: PropTypes.oneOf(TEXT_COLOR),
  /** Sets the size of the heading */
  size: PropTypes.oneOf([
    'extra-large',
    'large',
    'medium',
    'small',
    'extra-small',
  ]),
  /** Sets interactive styles for the underlying text component - See Text component */
  hover: PropTypes.oneOf(['underline', 'none']),
  /** Displays an icon before the heading */
  icon: PropTypes.string,
  /** Displays an icon after the heading */
  iconAfter: PropTypes.string,
  /** Adds padding between the icon and heading text */
  iconPadding: PropTypes.number,
  /** The underlying component */
  component: PropTypes.string,
  /** Class to pass down */
  className: PropTypes.string,
  /** Should the heading wrap on to multiple lines? */
  multiline: PropTypes.bool,
  /* Text alignment of the heading ('unset' | 'left' | 'center' | 'right' | 'inherit') */
  align: PropTypes.oneOf(['unset', 'left', 'center', 'right', 'inherit']),
};

export default Heading;
