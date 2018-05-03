/* @flow */
import React, {PureComponent} from 'react';
import {focusOnMount as _focusOnMount} from '../../utils/react';
import {isBoolean, isString} from 'lodash';
import styled, {css} from 'react-emotion';

import Text from '../text';
import {Flex} from '../layout';

const EXPANDS_BUFFER = 5;

const INPUT_SIZE_MAP = {
  small: {
    fontSize: 14,
    size: 32,
  },
  medium: {
    fontSize: 14,
    size: 40,
  },
  large: {
    fontSize: 16,
    size: 48,
  },
};

const getInputFont = size =>
  `normal ${INPUT_SIZE_MAP[size].fontSize}px WebFaktSoftPro`;

const StyledInputAddon = styled(Flex)`
  min-width: 40px;
  height: 40px;
  flex-flow: column;
  text-align: center;

  ${props =>
    props.inputTheme === 'default' &&
    css`
      background-color: ${props.theme.colors.grey300};
      color: ${props.theme.colors.navy600};
      border: 1px solid #dfe2e4;
      padding: 0 16px;

      ${props.addonType === 'prefix' &&
        css`
          border-right: 0;
          border-radius: ${props.theme.layout.borderRadiusInput} 0 0
            ${props.theme.layout.borderRadiusInput};
        `};
      ${props.addonType === 'suffix' &&
        css`
          border-left: 0;
          border-radius: 0 ${props.theme.layout.borderRadiusInput}
            ${props.theme.layout.borderRadiusInput} 0;
        `};
    `};
`;

export const InputAddon = (props: {
  content: string | React.Node,
  type: string,
  inputTheme: 'default' | 'transparent' | 'well',
}) => {
  return (
    <StyledInputAddon
      justifyContent="center"
      alignItems="center"
      addonType={props.type}
      inputTheme={props.inputTheme}
    >
      {isString(props.content) ? (
        <Text size="small" color="slate" weight="semi-bold">
          {props.content}
        </Text>
      ) : (
        props.content
      )}
    </StyledInputAddon>
  );
};

const StyledInputContainer = styled(Flex)`
  font-size: 16px;
  font-weight: ${props => props.theme.typography.fontWeightNormal};
  transition: background-color, border-color 160ms linear;
  user-select: text;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  min-width: 0;
  color: ${props => props.theme.colors.navy700};
  font-size: ${props => INPUT_SIZE_MAP[props.size].fontSize}px;
  height: ${props => INPUT_SIZE_MAP[props.size].size}px;

  &:focus {
    outline: 0;
  }

  &:-webkit-autofill {
    background-color: transparent;
  }

  &:disabled {
    background-color: ${props => props.theme.input.inputDisabledBackground};
    border: ${props => props.theme.input.inputDisabledBorder};
    cursor: not-allowed;
    color: ${props => props.theme.input.inputDisabledColor};
  }

  &:read-only {
    background-color: ${props => props.theme.input.inputReadonlyBackground};
    border: ${props => props.theme.input.inputReadonlyBorder};
    color: ${props => props.theme.input.inputReadonlyColor};
  }

  ${props =>
    props.inputTheme === 'default' &&
    css`
      background-color: #fff;
      border-radius: ${props.theme.input.inputBorderRadius};
      border: ${props.theme.input.inputDefaultBorder};
      padding: 4px 8px 4px 16px;

      &::placeholder {
        color: ${props.theme.colors.grey500};
      }

      &:not(:read-only):not(:disabled):hover {
        border: ${props.theme.input.inputHoverBorder};
      }

      &:not(:read-only):not(:disabled):focus {
        border: ${props.theme.input.inputActiveBorder};
      }

      ${props.withAddonPrefix &&
        css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `};
      ${props.withAddonSuffix &&
        css`
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `};
    `};

  ${props =>
    props.inputTheme === 'transparent' &&
    css`
      background: transparent;
      border: 0;
      padding: 4px 0;

      &::placeholder {
        color: ${props.theme.colors.navy500};
      }

      &:disabled,
      &:read-only {
        background-color: transparent;
        border: 0;
      }
    `};

  ${props =>
    props.inputTheme === 'well' &&
    css`
      border: 1px solid ${props.theme.colors.grey500};
      padding: 7px 10px;
    `} ${props =>
      props.valid &&
      css`
        border-color: ${props.theme.colors.green500}!important;
      `};

  ${props =>
    props.invalid &&
    css`
      border-color: ${props.theme.colors.pink500}!important;
    `};
`;

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
  addonPrefix: string | React.Node,
  /** A value to display after (to the right) the input */
  addonSuffix: string | React.Node,
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

  static displayName = 'Input';

  onFocus: Function;
  onBlur: Function;
  onChange: Function;

  constructor(props: TProps) {
    super(props);

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
      <StyledInputContainer marginBottom={margin} className={className}>
        {addonPrefix ? (
          <InputAddon inputTheme={theme} content={addonPrefix} type="prefix" />
        ) : null}
        <StyledInput
          {...otherProps}
          /** Emotion Props */
          inputTheme={theme}
          expands={expands}
          valid={isBoolean(valid) && valid}
          invalid={isBoolean(valid) && !valid}
          focused={focused}
          margin={margin}
          fullWidth={fullWidth}
          size={size}
          withAddonPrefix={!!addonPrefix}
          withAddonSuffix={!!addonSuffix}
          /** Other Props */
          ref={focusOnMount ? _focusOnMount : inputRef}
          style={_styles}
          className={className}
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
      </StyledInputContainer>
    );
  }
}
