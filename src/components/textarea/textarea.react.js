import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {omit} from 'lodash';
import cx from 'classnames';

import {UIBase} from '../layout';

import {removeNode} from '../../utils/dom';
import {parseStyleProps} from '../../utils/style';

import styles from './textarea.css';

/**
 * Escape any html markup from user input values to ensure correct
 * text measurement
 */

const escapeTags = str =>
  str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />');

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

export default class Textarea extends PureComponent {
  static propTypes = {
    /** The minimum number of rows to be displayed on render */
    minRows: PropTypes.number,
    /** Should the component expand as more text is added? */
    expand: PropTypes.bool,
    lineBuffer: PropTypes.number,
    /** A function to call on keyUp */
    onKeyUp: PropTypes.func,
    /** Should the component animate as it expands? */
    animate: PropTypes.bool,
    /** A class to pass down */
    className: PropTypes.string,
    /** Disables user interaction, but can still display a value */
    readonly: PropTypes.bool,
    /** A function to call onChange */
    onChange: PropTypes.func,
    /** The overall theme for the component */
    theme: PropTypes.string,
    /** A function to call when a user hits the return key */
    onReturn: PropTypes.func,
    /** Is is disabled? */
    disabled: PropTypes.bool,
    style: PropTypes.shape({}),
  };

  static defaultProps = {
    minRows: 2,
    lineBuffer: 2,
    animate: true,
    theme: 'default',
    onReturn: null,
  };

  static displayName = 'Textarea';

  constructor() {
    super();

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

  onKeyDown(event) {
    if (
      !!this.props.onReturn &&
      event.which === 13 &&
      event.shiftKey === false
    ) {
      event.preventDefault();
      if (this.props.onReturn) {
        this.props.onReturn(event);
      }
    }
  }

  /**
   * Key up is hooked to watch for content changes
   * @param {Event} event
   */
  onKeyUp(event) {
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
  onScroll(event) {
    if (this.props.expand) {
      event.preventDefault();
      const el = ReactDOM.findDOMNode(this);
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
      theme = 'default',
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

    const _classNames = cx(
      {
        [styles['ui-textarea']]: true,
        [styles[`ui-textarea--${theme}`]]: theme && theme !== 'default',
        [styles['ui-textarea--animate']]: animate,
        [styles['ui-textarea--expand']]: expand,
      },
      className
    );

    return (
      <UIBase
        component="textarea"
        onChange={!readonly && onChange}
        className={_classNames}
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
