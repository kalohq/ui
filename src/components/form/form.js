/* @flow */
import * as React from 'react';
import {HotKeys} from 'react-hotkeys';
import PureComponent from 'react-pure-render/component';

/**
 * A generic (and mostly semantic) form component.
 */

type TProps = {
  /** Children form components */
  children?: React.Node,
  /** A function to call when the form is submitted */
  onSubmit?: Function,
};

export default class Form extends PureComponent {
  constructor(props: TProps) {
    super(props);

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
      <HotKeys component="form" handlers={this.__handlers__} {...otherProps}>
        {children}
      </HotKeys>
    );
  }
}
