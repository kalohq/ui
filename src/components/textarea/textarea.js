/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import {omit} from 'lodash';
import styled, {css} from 'react-emotion';

import PureComponent from 'react-pure-render/component';
import {removeNode} from '../../utils/dom';
import {parseStyleProps} from '../../utils/style';

/**
 * Escape any html markup from user input values to ensure correct
 * text measurement
 */

const escapeTags = (str: string): string =>
  str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />');

const StyledTextarea = styled.textarea`
  background: transparent;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6em;
  padding: 8px 16px;
  color: ${props => props.theme.colors.navy700};

  &::placeholder {
    color: ${props => props.theme.colors.grey500};
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: ${props => props.theme.input.inputDisabledBackground};
    border: ${props => props.theme.input.inputDisabledBorder};
    cursor: not-allowed;
    color: ${props => props.theme.input.inputDisabledColor};
  }

  &:readonly {
    background-color: ${props => props.theme.input.inputReadonlyBackground};
    border: ${props => props.theme.input.inputReadonlyBorder};
    cursor: default;
    color: ${props => props.theme.input.inputReadonlyColor};
  }

  ${props =>
    props.textareaTheme === 'default' &&
    css`
      background-color: ${props.theme.colors.white};
      border: ${props.theme.input.inputDefaultBorder};
      border-radius: ${props.theme.input.inputBorderRadius};

      &:not(:read-only):not(:disabled):hover {
        border: ${props.theme.input.inputHoverBorder};
      }

      &:not(:read-only):not(:disabled):focus {
        outline: 0;
        border: ${props.theme.input.inputActiveBorder};
        box-shadow: 0 0 0 3px rgb(238, 244, 250);
      }
    `};

  ${props =>
    props.textareaTheme === 'transparent' &&
    css`
      background-color: transparent;
      border: 0;
    `};

  ${props => props.animate && css`transition: height 0.2s ease-in-out;`};

  ${props =>
    props.expand &&
    css`
      overflow: hidden;
      resize: none;
    `};
`;

/**
 * Render a textarea which can expand vertically
 * - The "autogrow/expand" logic looks horrible but, hey, there’s no better way
 *   in the web to get precise text measurements with linebreaking etc.
 *   - It works by mirroring styles into a dummy div and calculating the height from
 *     the mirror
 *   Current known drawbacks:
 *   - .setup() only gets called once so if styles are updater later the mirror might be
 *     out of sync
 */

type TProps = {
  /** The minimum number of rows to be displayed on render */
  minRows?: number,
  /** Should the component expand as more text is added? */
  expand?: boolean,
  lineBuffer?: number,
  /** A function to call on keyUp */
  onKeyUp?: Function,
  /** Should the component animate as it expands? */
  animate?: boolean,
  /** A class to pass down */
  className?: string,
  /** Disables user interaction, but can still display a value */
  readonly?: boolean,
  /** A function to call onChange */
  onChange?: Function,
  /** The overall theme for the component */
  theme?: 'default' | 'transparent',
  /** A function to call when a user hits the return key */
  onReturn?: boolean,
};

export default class Textarea extends PureComponent {
  static defaultProps = {
    minRows: 2,
    lineBuffer: 2,
    animate: true,
    theme: 'default',
    onReturn: null,
  };

  static displayName = 'Textarea';

  onKeyDown: Function;
  onKeyUp: Function;
  onScroll: Function;

  constructor(props: TProps) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.setup();
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  componentWillUnmount() {
    removeNode(this.mirror);
  }

  onKeyDown(event: SyntheticEvent<*>) {
    if (
      !!this.props.onReturn &&
      event.which === 13 &&
      event.shiftKey === false
    ) {
      event.preventDefault();
      this.props.onReturn(event);
    }
  }

  /**
   * Key up is hooked to watch for content changes
   * @param {Event} event
   */
  onKeyUp(event: SyntheticEvent<*>) {
    this.update();

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  /**
   * Hook into scroll event to prevent jumping while height is updated
   * to fit content
   * @param {Event} event
   */
  onScroll(event: SyntheticWheelEvent<*>) {
    if (this.props.expand) {
      event.preventDefault();
      const el = ReactDOM.findDOMNode(this);
      // $FlowFixMe
      if (el) el.scrollTop = 0;
    }
  }

  /**
   * Update will calculate heights using input contents taking into account
   * the min number of rows provided via props
   */
  update() {
    if (this.props.expand) {
      const textarea = ReactDOM.findDOMNode(this);
      // $FlowFixMe
      const value = textarea ? textarea.value : null;

      // If the value hasn’t changed we don’t need to do anything
      if (this.__lastUpdatedValue__ === value) {
        return false;
      }

      const mirror = this.mirror;
      let html = '';

      mirror.style.display = 'block';

      for (let i = 0; i < this.props.minRows; i++) {
        html += '<br/>';
      }

      mirror.innerHTML = html;
      const minMirrorHeight = mirror.clientHeight;

      html = escapeTags(String(value));

      for (let i = 0; i < this.props.lineBuffer; i++) {
        html += '<br/>';
      }
      mirror.innerHTML = html; // Ensure we are always a line ahead for smoother expanding

      const mirrorHeight = Math.max(minMirrorHeight, mirror.clientHeight);

      mirror.style.display = 'none';

      if (!this.state || this.state.height !== mirrorHeight) {
        this.setState({height: mirrorHeight});
      }

      this.__lastUpdatedValue__ = value;
    }
    return true;
  }

  /**
   * Setup will configure the dummy "mirror element" to match the input
   * styles as best as possible
   */
  setup() {
    if (this.props.expand) {
      // Create a new mirror if we do not have one
      if (!this.mirror) {
        this.mirror = document.createElement('div');
        // $FlowFixMe
        document.body.appendChild(this.mirror);
      }

      const textarea = ReactDOM.findDOMNode(this);
      const mirror = this.mirror;
      const style = window.getComputedStyle(textarea);

      mirror.style.display = 'none';
      mirror.style.wordWrap = 'break-word';
      mirror.style.whiteSpace = 'normal';
      mirror.style.paddingTop = style.getPropertyValue('padding-top');
      mirror.style.paddingBottom = style.getPropertyValue('padding-bottom');
      mirror.style.paddingLeft = style.getPropertyValue('padding-left');
      mirror.style.paddingRight = style.getPropertyValue('padding-right');
      mirror.style.width = style.getPropertyValue('width');
      mirror.style.fontFamily = style.getPropertyValue('font-family');
      mirror.style.fontWeight = style.getPropertyValue('font-weight');
      mirror.style.fontSize = style.getPropertyValue('font-size');
      mirror.style.lineHeight = style.getPropertyValue('line-height');
    }
  }

  render() {
    const {height = undefined} = this.state || {};

    const {
      animate,
      style,
      className,
      theme,
      readonly,
      disabled,
      onChange,
      expand,
      ...otherProps
    } = this.props;

    const filteredProps = {
      ...omit(otherProps, ['editable', 'lineBuffer', 'minRows', 'onReturn']),
    };

    const styleProps = parseStyleProps(filteredProps);

    return (
      <StyledTextarea
        animate={animate}
        expand={expand}
        textareaTheme={theme}
        onChange={!readonly && onChange}
        className={className}
        disabled={disabled}
        readOnly={readonly}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        style={{
          height,
          ...styleProps.style,
          ...style,
        }}
        onScroll={this.onScroll}
        {...styleProps.props}
        {...filteredProps}
      />
    );
  }
}
