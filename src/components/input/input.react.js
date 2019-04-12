/* @flow */
import React, {PureComponent} from 'react';
import {isBoolean, isString} from 'lodash';
import cx from 'classnames';

import Text from '../text';
import Icon from '../icon';

import {focusOnMount as _focusOnMount} from '../../utils/react';
import {cleanProps} from '../../utils/style';

import coreStyles from './input.module.css';
import reactStyles from './input.react.module.css';

const EXPANDS_BUFFER = 5;

const INPUT_SIZE_MAP = {
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  'extra-large': {
    fontSize: 16,
  },
};

const getInputFont = size =>
  size && `normal ${INPUT_SIZE_MAP[size].fontSize}px system-ui`;

export const InputAddon = (props: {
  content: string | React$Node,
  type: string,
}) => {
  return (
    <div
      className={cx({
        [reactStyles['ui-input-addon']]: true,
        [reactStyles[`ui-input-addon--${props.type}`]]: true,
      })}
    >
      {isString(props.content) ? (
        <Text size="small" color="slate" weight="semi-bold">
          {props.content}
        </Text>
      ) : (
        props.content
      )}
    </div>
  );
};

type TProps = {
  /** The visual theme of the input */
  theme?: 'default' | 'transparent' | 'well',
  /** Adds a bottom margin */
  margin?: 'none' | 'small' | 'medium' | 'large',
  /** The overall size of the input */
  size?: 'small' | 'medium' | 'large' | 'extra-large',
  /** Sets the initial value for the input outside of the React lifecycle */
  defaultValue?: string,
  /** The value of the input */
  value?: string,
  /** A function to call when a user focuses on the input */
  onFocus?: Function,
  /** A function to call when a user focuses away from the input */
  onBlur?: Function,
  /** A function to call when the input value changes */
  onChange?: Function,
  onEdited?: Function,
  /** A style object to pass to the underlying element */
  style?: Object,
  /** A class to pass down */
  className?: string,
  expands?: boolean,
  /** Will focus the input automatically on render */
  focusOnMount?: boolean,
  /** Sets the input placeholder copy */
  placeholder?: string,
  /** Displays the input with a valid status if true, and an invalid status if false */
  valid?: boolean,
  /** Removes user interaction, but can still display a value */
  readonly?: boolean,
  /** A name to pass down to the DOM */
  name?: string,
  /** A React 'ref' */
  inputRef?: Function,
  /** A value to display before (to the left) of the input */
  addonPrefix: string | React$Node,
  /** A value to display after (to the right) the input */
  addonSuffix: string | React$Node,
  fullWidth?: boolean,
  /** An icon to displau to the left of the input */
  icon?: string,
  /** Native DOM properties to pass to the input element */
  properties?: Object,
};

type TState = {
  focused: boolean,
  changed: boolean,
};

// $FlowFixMe
export default class Input extends PureComponent<TProps, TState> {
  static defaultProps = {
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    onEdited: () => {},
  };

  static displayName = 'Input';

  onFocus: Function;
  onBlur: Function;
  onChange: Function;

  constructor() {
    super();

    this.state = {focused: false, changed: false};

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus(event: SyntheticEvent<*>) {
    if (this.props.onFocus) {
      this.props.onFocus(event);

      this.setState({focused: true});
    }

    if (this.props.readonly) {
      event.preventDefault();
    }
  }

  onBlur(event: SyntheticEvent<*>) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    if (this.props.readonly) {
      event.preventDefault();
      return;
    }

    this.setState({focused: false});

    if (this.state.changed && this.props.onEdited) {
      this.props.onEdited(event);
    }
  }

  onChange(event: SyntheticEvent<*>) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({changed: true});
  }

  /**
   * If we are presenting an extendable input field we need to know what width
   * our input should have, this will depend on the width of the text currently
   * entered as well as the font. We use canvas to measure this value.
   */
  getTextWidth(text: string, font: string): number {
    // $FlowFixMe
    this.canvas = this.canvas ? this.canvas : document.createElement('canvas');
    // $FlowFixMe
    const context = this.canvas.getContext('2d');
    if (context) {
      context.font = font;
      return context.measureText(text).width;
    }
    return 0;
  }

  render() {
    const {
      theme = 'default',
      margin = 'none',
      size = 'medium',
      defaultValue,
      value,
      style,
      className,
      expands,
      focusOnMount,
      onEdited: _IGNORED,
      placeholder,
      valid,
      readonly,
      name,
      inputRef,
      addonPrefix,
      addonSuffix,
      icon,
      properties,
      ...otherProps
    } = this.props;

    const _styles = {
      ...style,
      width:
        expands && value && placeholder
          ? Math.max(
              this.getTextWidth(value, getInputFont(size)) + EXPANDS_BUFFER,
              this.getTextWidth(placeholder, getInputFont(size)) +
                EXPANDS_BUFFER
            )
          : undefined,
    };

    const _classNames = cx(
      {
        [coreStyles['ui-input']]: true,
        [coreStyles[`ui-input--theme-${theme}`]]: theme && theme !== 'default',
        [coreStyles[`ui-input--${size}`]]: size,
        [coreStyles[`ui-input--valid`]]: isBoolean(valid) && valid,
        [coreStyles[`ui-input--invalid`]]: isBoolean(valid) && !valid,
        [reactStyles[`ui-input--with-addon-prefix`]]: !!addonPrefix,
        [reactStyles[`ui-input--with-addon-suffix`]]: !!addonSuffix,
        [reactStyles[`ui-input--with-icon`]]: !!icon,
      },
      className
    );

    return (
      <div
        className={cx(
          {
            [reactStyles['ui-input-container']]: true,
            [reactStyles[`ui-input-container--margin-${margin}`]]: margin,
          },
          className
        )}
      >
        {addonPrefix && (
          <InputAddon inputTheme={theme} content={addonPrefix} type="prefix" />
        )}
        {icon && (
          <div className={cx(reactStyles['ui-input-icon'])}>
            <Icon size={18} color="navy600">
              {icon}
            </Icon>
          </div>
        )}
        <input
          {...cleanProps(otherProps)}
          {...properties}
          /** Other Props */
          ref={focusOnMount ? _focusOnMount : inputRef}
          style={_styles}
          className={_classNames}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={readonly ? undefined : this.onChange}
          placeholder={placeholder}
          name={!!name ? name : placeholder}
          value={value}
          defaultValue={defaultValue}
          readOnly={readonly}
        />
        {addonSuffix ? (
          <InputAddon inputTheme={theme} content={addonSuffix} type="suffix" />
        ) : null}
      </div>
    );
  }
}
