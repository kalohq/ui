/* @flow */
import React, {PureComponent} from 'react';
import {HotKeys} from 'react-hotkeys';

/**
 * A generic (and mostly semantic) form component.
 */

type TProps = {
  /** Children form components */
  children?: React$Node,
  /** A function to call when the form is submitted */
  onSubmit?: Function,
};

export default class Form extends PureComponent<TProps> {
  constructor(props: TProps) {
    super(props);

    // $FlowFixMe
    this.__handlers__ = {
      'meta+return': this.onSubmitHotkey.bind(this),
    };
  }

  onSubmitHotkey(event: SyntheticEvent<*>) {
    if (this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  }

  render() {
    const {children, ...otherProps} = this.props;

    return (
      // $FlowFixMe
      <HotKeys component="form" handlers={this.__handlers__} {...otherProps}>
        {children}
      </HotKeys>
    );
  }
}
