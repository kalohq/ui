import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {isString} from 'lodash';
import cx from 'classnames';

import {UIBase} from '../layout';
import Icon from '../icon';

import coreStyles from './button.css';
import reactStyles from './button.react.css';

const ICON_SIZE = {
  small: 14,
  medium: 18,
  large: 20,
  'extra-large': 24,
};

export default class Button extends PureComponent {
  static propTypes = {
    /** Button contents */
    children: PropTypes.any,
    /** A message to display after loading */
    message: PropTypes.string,
    /** An ARIA role to pass down */
    role: PropTypes.string,
    /** Is the button disabled? */
    disabled: PropTypes.bool,
    /** An icon from our icon set to display */
    icon: PropTypes.string,
    /** Is the icon the only child? The button will be displayed as a square if true */
    loneIcon: PropTypes.bool,
    /** Should the button expand to 100% of the parent? */
    wide: PropTypes.bool,
    /** The visual size ('small' | 'medium' | 'large' | 'extra-large') */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
    /** The visual theme ('primary' | 'secondary' | 'tertiary' | 'delete' | 'action' | 'flare') */
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'tertiary',
      'delete',
      'action',
      'flare',
    ]),
    /** Ignore - Set by ButtonGroup */
    grouped: PropTypes.bool,
    /** Ignore - Set by ButtonGroup */
    spacing: PropTypes.bool,
    /** Expand the button using flex */
    flex: PropTypes.bool,
    /** Is the button active? - Useful for when a button is used as a nav pill */
    active: PropTypes.bool,
    /** Is the button loading? - This will replace the content with a spinner */
    loading: PropTypes.bool,
    /** Displays the callback message if the loading was successful */
    success: PropTypes.bool,
    /** A function to call on user interaction */
    onClick: PropTypes.func,
    /** After a successful load, how long should the UI wait before continuing? */
    loadedTimeout: PropTypes.number,
    /** Override the component - Use with caution */
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** A name to pass down to the DOM */
    name: PropTypes.string,
    /** A type to pass down to the DOM */
    type: PropTypes.string,
    /** Places the button in a visually subdued state */
    subdued: PropTypes.bool,
    /** Children that should not be double rendered - See ButtonDropdown */
    singleRenderChildren: PropTypes.any,
    /** Class to pass down */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** Style to pass down */
    style: PropTypes.object,
  };

  static defaultProps = {
    role: 'button',
    size: 'large',
    variant: 'primary',
    wide: false,
    loading: false,
    loneIcon: false,
    loadedTimeout: 600,
  };

  static displayName = 'Button';

  constructor() {
    super();

    this.state = {
      loaded: false,
    };
  }

  componentWillUnmount() {
    if (this.__loadedTimeout__) {
      clearTimeout(this.__loadedTimeout__);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading) {
      this.setState({loaded: true});
      clearTimeout(this.__loadedTimeout__);
      this.__loadedTimeout__ = setTimeout(() => {
        if (this.state.loaded) {
          this.setState({loaded: false});
        }
      }, this.props.loadedTimeout);
    }
  }

  render() {
    const {
      children,
      disabled,
      icon,
      loneIcon,
      variant,
      grouped,
      spacing,
      size,
      active,
      wide,
      onClick,
      loading,
      success,
      message,
      name,
      flex,
      type,
      role,
      component,
      className,
      style,
      subdued,
      singleRenderChildren,
      loadedTimeout: _IGNORED,
      ...otherProps
    } = this.props;

    const {loaded} = this.state;

    const _classNames = cx(
      {
        [coreStyles['ui-btn']]: true,
        [coreStyles[`ui-btn--${String(size)}`]]: true,
        [coreStyles[`ui-btn--${String(variant)}`]]: true,
        [coreStyles[`ui-btn--subdued`]]: subdued && variant === 'tertiary',
        [coreStyles[`ui-btn--active`]]: active,
        [coreStyles[`ui-btn--lone-icon`]]: loneIcon,
        [coreStyles[`ui-btn--grouped`]]: grouped,
        [coreStyles[`ui-btn--grouped-with-spacing`]]: spacing,
        [coreStyles[`ui-btn--loading`]]: Boolean(loading),

        [reactStyles[`ui-btn--state-success`]]: success,
        [reactStyles[`ui-btn--state-loaded`]]: loaded,
        [reactStyles[`ui-btn--state-loaded`]]: loaded,
        [reactStyles[`ui-btn--react-wide`]]: wide,
        [reactStyles[`ui-btn--react-flex`]]: flex,
      },
      className
    );

    const iconElement = isString(icon) ? (
      <Icon
        marginRight={loneIcon ? 0 : 8}
        marginLeft={loneIcon ? 0 : -8}
        size={!!size ? ICON_SIZE[size] : 18}
      >
        {icon}
      </Icon>
    ) : (
      icon
    );

    const handleClick = event => {
      // Prevent form submit events propagating if button is mid-request
      if (loading || disabled) {
        event.preventDefault();
        return;
      }
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <UIBase
        style={style}
        role={role}
        name={name}
        type={type}
        disabled={success ? false : disabled || loading}
        active={!!active}
        className={_classNames}
        onClick={handleClick}
        data-test="ui-button"
        component={component ? component : 'button'}
        {...otherProps}
      >
        <div className={reactStyles['ui-btn__react-placeholder-message']}>
          {iconElement}
          {children}
        </div>
        <div
          className={reactStyles['ui-btn__react-visible-message']}
          name="message"
          title={isString(children) ? children : undefined}
        >
          {iconElement}
          {children}
          {singleRenderChildren}
        </div>
        <div className={reactStyles['ui-btn__react-success-message']}>
          {iconElement}
          {message}
        </div>
      </UIBase>
    );
  }
}
