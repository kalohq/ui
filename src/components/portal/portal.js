/* @flow */
import * as React from 'react';
import ReactDOM from 'react-dom';
import {pickStyles} from '../../utils/style';

import PureComponent from 'react-pure-render/component';
import {Block} from '../layout';

/**
 * A component for escaping the DOM
 */

type TProps = {
  children?: React.Node,
  static?: boolean,
};

export default class Portal extends PureComponent {
  props: TProps;

  static defaultProps = {
    static: false,
  };

  componentDidMount() {
    this.el = document.createElement('div');
    if (document.body) document.body.appendChild(this.el);
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this.el
    );
  }

  componentDidUpdate() {
    // only update if we aren’t forcing this sticky to be static
    if (!this.props.static) {
      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        this.renderChildren(),
        this.el
      );
    }
  }

  componentWillUnmount() {
    // TODO - keep an eye on this react issue
    // https://github.com/facebook/react/issues/2410
    if (!this.el) return;
    ReactDOM.unmountComponentAtNode(this.el);
    if (document.body) document.body.removeChild(this.el);
  }

  renderChildren() {
    const {children, static: _IGNORED, ...otherProps} = this.props;

    return <Block {...pickStyles(otherProps)}>{children}</Block>;
  }

  render() {
    return <Block style={{display: 'none'}} />;
  }
}
