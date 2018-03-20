/* @flow */
import * as React from 'react';
import Heading from '../heading';
import PureComponent from 'react-pure-render/component';

type TProps = {
  children: React.Node,
};

export default class H4 extends PureComponent<TProps> {
  render() {
    const {children} = this.props;

    return (
      <Heading component="h4" weight="normal" {...this.props}>
        {children}
      </Heading>
    );
  }
}
