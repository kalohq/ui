/* @flow */
import React, {PureComponent} from 'react';
import {isString} from 'lodash';
import cx from 'classnames';
import {lighten, darken} from 'polished';

import {UIBase} from '../layout';
import Icon from '../icon';
import LoadingSpinner from '../loading-spinner';
import {withTheme} from 'emotion-theming';

import coreStyles from './button.core.css';
import reactStyles from './button.react.css';

const ICON_SIZE = {
  small: 14,
  medium: 18,
  large: 20,
  'extra-large': 24,
};

type TProps = {
  /** Button contents */
  children?: any,
  /** A message to display after loading */
  message?: string,
  /** An ARIA role to pass down */
  role?: string,
  /** Is the button disabled? */
  disabled?: boolean,
  /** An icon from our icon set to display */
  icon?: string,
  /** Is the icon the only child? The button will be displayed as a square if true */
  loneIcon?: boolean,
  /** Should the button expand to 100% of the parent? */
  wide?: boolean,
  /** The visual size */
  size?: 'small' | 'medium' | 'large' | 'extra-large',
  /** The visual theme */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'delete' | 'action',
  /** Ignore - Set by ButtonGroup */
  grouped?: boolean,
  /** Ignore - Set by ButtonGroup */
  spacing?: boolean,
  /** Expand the button using flex */
  flex?: boolean,
  /** Is the button active? - Useful for when a button is used as a nav pill */
  active?: boolean,
  /** Is the button loading? - This will replace the content with a spinner */
  loading?: boolean,
  /** Displays the callback message if the loading was successful */
  success?: boolean,
  /** A function to call on user interaction */
  onClick?: Function,
  /** After a successful load, how long should the UI wait before continuing? */
  loadedTimeout?: number,
  /** Override the component - Use with caution */
  component?: 'string' | React$Node,
  /** A name to pass down to the DOM */
  name?: string,
  /** A type to pass down to the DOM */
  type?: string,
  /** Places the button in a visually subdued state */
  subdued?: boolean,
  /** Children that should not be double rendered - See ButtonDropdown */
  singleRenderChildren?: any,
  /** Class to pass down */
  className?: string | Object,
  /** Style to pass down */
  style?: Object,
  theme: {
    user: {
      primary: string,
      secondary: string,
    },
    colors: Object,
  },
};

type TState = {
  loaded: boolean,
};

class Button extends PureComponent<TProps, TState> {
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

  componentWillReceiveProps(nextProps: TProps) {
    if (this.props.loading && !nextProps.loading) {
      this.setState({loaded: true});
      // $FlowFixMe
      clearTimeout(this.__loadedTimeout__);
      // $FlowFixMe
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
      theme,
      ...otherProps
    } = this.props;

    const {loaded} = this.state;

    const isBrandColorSet = theme && theme.user && theme.user.primary;

    const brandedStyles = isBrandColorSet
      ? {
          backgroundColor: theme.user.primary,
          color: '#fff',
          ':hover': {
            backgroundColor: lighten(0.05, theme.user.primary),
          },
          ':active': {
            backgroundColor: darken(0.05, theme.user.primary),
          },
          ':focus': {
            boxShadow: `0 0 0 3px ${lighten(0.2, theme.user.primary)}`,
          },
        }
      : {};

    const _classNames = cx(
      {
        [coreStyles['ui-btn']]: true,
        [coreStyles[`ui-btn--${String(size)}`]]: true,
        [coreStyles[`ui-btn--${String(variant)}`]]: !(
          variant === 'primary' && isBrandColorSet
        ),
        [coreStyles[`ui-btn--subdued`]]: subdued && variant === 'tertiary',
        [coreStyles[`ui-btn--active`]]: active,
        [coreStyles[`ui-btn--lone-icon`]]: loneIcon,
        [coreStyles[`ui-btn--grouped`]]: grouped,
        [coreStyles[`ui-btn--grouped-with-spacing`]]: spacing,

        [reactStyles[`ui-btn--state-success`]]: success,
        [reactStyles[`ui-btn--state-loading`]]: loading,
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
        css={brandedStyles}
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
        <div className={reactStyles['ui-btn__react-loading-spinner']}>
          <LoadingSpinner size="small" />
        </div>
      </UIBase>
    );
  }
}

export default withTheme(Button);
