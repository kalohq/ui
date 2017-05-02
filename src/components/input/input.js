import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {isBoolean} from 'lodash';

import PureComponent from 'react-pure-render/component';

import styles from './input.css';

const EXPANDS_BUFFER = 5;
const BOTTOM_BORDER_WIDTH = 1;

const SIZE_MAP = {
  'small': 14,
  'medium': 16,
  'large': 18,
  'extra-large': 20,
};

function getInputFont(size) {
  return `lighter ${SIZE_MAP[size]}px WebFaktSoftPro`;
}

/**
 * Generic Input component
 * - Can expand to fit user contents with `expands` prop
 */
export default class Input extends PureComponent {

  static propTypes = {
    theme: PropTypes.oneOf([
      'default',
      'blue',
      'dark',
      'well',
      'borderless',
      'transparent',
      'transparent-grey',
    ]),
    margin: PropTypes.oneOf([
      'none',
      'small',
      'medium',
      'large',
    ]),
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
      'extra-large',
    ]),
    fullWidth: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEdited: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
    expands: PropTypes.bool,
    focusOnMount: PropTypes.bool,
    placeholder: PropTypes.string,
    valid: PropTypes.bool,
    readonly: PropTypes.bool,
    name: PropTypes.string,
    borderless: PropTypes.bool,
  };

  static defaultProps = {
    theme: 'default',
    margin: 'none',
    style: {},
    className: '',
    expands: false,
    fullWidth: true,
    size: 'small',
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    onEdited: () => {},
    readonly: false,
    borderless: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      changed: false,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus(event) {
    this.props.onFocus(event);

    if (this.props.readonly) {
      event.preventDefault();
      return;
    }

    this.setState({
      focused: true,
    });
  }

  onBlur(event) {
    this.props.onBlur(event);

    if (this.props.readonly) {
      event.preventDefault();
      return;
    }

    this.setState({
      focused: false,
    });

    if (this.state.changed) {
      this.props.onEdited(event);
    }
  }

  onChange(event) {
    this.props.onChange(event);
    this.setState({changed: true});
  }

  /**
   * If we are presenting an extendable input field we need to know what width
   * our input should have, this will depend on the width of the text currently
   * entered as well as the font. We use canvas to measure this value.
   */
  getTextWidth(text, font) {
    this.canvas = this.canvas ?
      this.canvas :
      document.createElement('canvas');
    const context = this.canvas.getContext('2d');
    context.font = font;
    return context.measureText(text).width;
  }

  render() {
    const {
      focused,
    } = this.state;

    const {
      expands,
      margin,
      valid,
      style,
      className,
      value,
      theme,
      placeholder,
      size,
      fullWidth,
      readonly,
      defaultValue,
      name,
      borderless,
      onEdited: _IGNORED,
      focusOnMount: __IGNORED,
      editable: ___IGNORED,
      ...otherProps
    } = this.props;

    return (
      <input
        {...otherProps}
        ref={this.props.focusOnMount ? null : null}
        className={cx({
          [styles.root]: true,
          [styles[theme]]: true,
          [styles.expands]: expands,
          [styles.valid]: isBoolean(valid) && valid,
          [styles.invalid]: isBoolean(valid) && !valid,
          [styles.blank]: !value,
          [styles.focused]: focused,
          [styles[`margin-${margin}`]]: true,
          [styles.fullWidth]: fullWidth,
          [styles[`size-${size}`]]: true,
        }, className)}
        style={{
          borderBottomWidth: (borderless || theme === 'borderless' ? (
            '0'
          ) : (
            `${BOTTOM_BORDER_WIDTH}px`
          )),
          ...style,
          width: (expands ? (
            Math.max(
              this.getTextWidth(value, getInputFont(size)) + EXPANDS_BUFFER,
              this.getTextWidth(placeholder, getInputFont(size)) + EXPANDS_BUFFER,
            )
          ) : undefined),
        }}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onChange={readonly ? undefined : this.onChange}
        placeholder={placeholder}
        name={!!name ? name : placeholder}
        value={value}
        defaultValue={defaultValue}
        readOnly={readonly}
      />
    );
  }
}
