/* @flow */
import * as React from 'react';
import Heading from '../heading';
import PureComponent from 'react-pure-render/component';

type TProps = {
  children?: React.Node,
};

export default class H1 extends PureComponent<TProps> {
  render() {
    const {children} = this.props;

    return (
      <Heading
        component="h1"
        weight="normal"
        size="extra-large"
        {...this.props}
      >
        {children}
      </Heading>
    );
  }
}
