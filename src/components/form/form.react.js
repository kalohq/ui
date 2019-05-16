import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {HotKeys} from 'react-hotkeys';

/**
 * A generic (and mostly semantic) form component.
 */

export default class Form extends PureComponent {
  static propTypes = {
    /** Children form components */
    children: PropTypes.node,
    /** A function to call when the form is submitted */
    onSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.__handlers__ = {
      'meta+return': this.onSubmitHotkey.bind(this),
    };
  }

  onSubmitHotkey(event) {
    if (this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  }

  render() {
    const {children, ...otherProps} = this.props;

    return (
      <HotKeys component="form" handlers={this.__handlers__} {...otherProps}>
        {children}
      </HotKeys>
    );
  }
}
