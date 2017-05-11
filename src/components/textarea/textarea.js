import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import cx from 'classnames';
import {removeNode} from 'utils/dom';
import {parseStyleProps} from 'utils/style';

import styles from './textarea.css';

/**
 * Escape any html markup from user input values to ensure correct
 * text measurement
 * @param {string} str
 * @returns {string}
 */
function escapeTags(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br />');
}

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
    expand: PropTypes.bool,
    minRows: PropTypes.number,
    lineBuffer: PropTypes.number,
    onKeyUp: PropTypes.func,
    animate: PropTypes.bool,
    className: PropTypes.string,
    readonly: PropTypes.bool,
    onChange: PropTypes.func,
    theme: PropTypes.oneOf(['default', 'well']),
    borderless: PropTypes.bool,
  };

  static defaultProps = {
    minRows: 2,
    animate: true,
    lineBuffer: 2,
    style: {},
  };

  constructor() {
    super();

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

  /**
   * Key up is hooked to watch for content changes
   * @param {Event} e
   */
  onKeyUp(e) {
    this.update();

    if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }
  }

  /**
   * Hook into scroll event to prevent jumping while height is updated
   * to fit content
   * @param {Event} e
   */
  onScroll(e) {
    if (this.props.expand) {
      e.preventDefault();
      ReactDOM.findDOMNode(this).scrollTop = 0;
    }
  }

  /**
   * Update will calculate heights using input contents taking into account
   * the min number of rows provided via props
   */
  update() {
    if (this.props.expand) {
      const textarea = ReactDOM.findDOMNode(this);
      const value = textarea.value;

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
      readonly,
      onChange,
      className,
      theme,
      style,
      expand,
      animate,
      borderless,
      onEdited: _IGNORED,
      minRows: __IGNORED,
      lineBuffer: ___IGNORED,
      editable: ____IGNORED,
      ...otherProps
    } = this.props;

    const inputClassName = cx(
      {
        [styles.root]: true,
        [styles.expand]: expand,
        [styles.animate]: animate,
        [styles[`theme-${theme}`]]: !!theme,
      },
      className
    );

    const styleProps = parseStyleProps(otherProps);

    return (
      <textarea
        onChange={!readonly && onChange}
        className={inputClassName}
        onKeyUp={this.onKeyUp}
        style={{
          height,
          borderBottomWidth: borderless ? 0 : undefined,
          ...styleProps.style,
          ...style,
        }}
        onScroll={this.onScroll}
        {...styleProps.props}
        {...otherProps}
      />
    );
  }
}
