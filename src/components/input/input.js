/* @flow */
import React from 'react';
import cx from 'classnames';
import {focusOnMount as _focusOnMount} from '../../utils/react';
import PureComponent from 'react-pure-render/component';
import {isBoolean, isString} from 'lodash';

import Text from '../text';
import {Flex} from '../layout';

import styles from './input.css';

const EXPANDS_BUFFER = 5;

const SIZE_MAP = {
  small: 14,
  medium: 16,
  large: 18,
  'extra-large': 20,
};

function getInputFont(size) {
  return `normal ${SIZE_MAP[size]}px WebFaktSoftPro`;
}

export const InputAddon = (props: {content: string, type: string}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      className={cx({
        [styles.addon]: true,
        [styles[`addon-${props.type}`]]: true,
      })}
    >
      {isString(props.content) ? (
        <Text size="small" color="slate" weight="semi-bold">
          {props.content}
        </Text>
      ) : (
        props.content
      )}
    </Flex>
  );
};

export default class Input extends PureComponent {
  static defaultProps = {
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    onEdited: () => {},
    theme: 'default',
    margin: 'none',
    size: 'medium',
  };

  onFocus: Function;
  onBlur: Function;
  onChange: Function;

  constructor(props: {
    theme?: 'default' | 'transparent' | 'well',
    margin?: 'none' | 'small' | 'medium' | 'large',
    size?: 'small' | 'medium' | 'large' | 'extra-large',
    defaultValue?: string,
    value?: string,
    onFocus?: Function,
    onBlur?: Function,
    onChange?: Function,
    onEdited?: Function,
    style?: Object,
    className?: string,
    expands?: boolean,
    focusOnMount?: boolean,
    placeholder?: string,
    valid?: boolean,
    readonly?: boolean,
    name?: string,
    inputRef?: Function,
    addonPrefix: string | React$Element<*>,
    addonSuffix: string | React$Element<*>,
  }) {
    super(props);

    this.state = {focused: false, changed: false};

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus(event: SyntheticEvent) {
    if (this.props.onFocus) {
      this.props.onFocus(event);

      this.setState({focused: true});
    }

    if (this.props.readonly) {
      event.preventDefault();
    }
  }

  onBlur(event: SyntheticEvent) {
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

  onChange(event: SyntheticEvent) {
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
    this.canvas = this.canvas ? this.canvas : document.createElement('canvas');
    const context = this.canvas.getContext('2d');
    if (context) {
      context.font = font;
      return context.measureText(text).width;
    }
    return 0;
  }

  render() {
    const {
      theme,
      margin,
      size,
      fullWidth,
      defaultValue,
      value,
      style,
      className,
      expands,
      focusOnMount,
      onEdited: _IGNORED,
      editable: __IGNORED,
      placeholder,
      valid,
      readonly,
      name,
      inputRef,
      addonPrefix,
      addonSuffix,
      ...otherProps
    } = this.props;

    const {focused} = this.state;

    const _classNames = cx(
      {
        [styles.root]: true,
        [styles[`theme-${theme}`]]: true,
        [styles.expands]: expands,
        [styles.valid]: isBoolean(valid) && valid,
        [styles.invalid]: isBoolean(valid) && !valid,
        [styles.blank]: !value,
        [styles.focused]: focused,
        [styles[`margin-${margin}`]]: true,
        [styles.fullWidth]: fullWidth,
        [styles[`size-${size}`]]: true,
        [styles.withAddonPrefix]: !!addonPrefix,
        [styles.withAddonSuffix]: !!addonSuffix,
      },
      className
    );

    const _styles = {
      ...style,
      width: expands
        ? Math.max(
            this.getTextWidth(value, getInputFont(size)) + EXPANDS_BUFFER,
            this.getTextWidth(placeholder, getInputFont(size)) + EXPANDS_BUFFER
          )
        : undefined,
    };

    return (
      <Flex className={_classNames}>
        {addonPrefix ? (
          <InputAddon content={addonPrefix} type="prefix" />
        ) : null}
        <input
          {...otherProps}
          ref={focusOnMount ? _focusOnMount : inputRef}
          style={_styles}
          className={styles.input}
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
          <InputAddon content={addonSuffix} type="suffix" />
        ) : null}
      </Flex>
    );
  }
}
