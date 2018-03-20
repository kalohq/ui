/* @flow */
import * as React from 'react';
import Heading from '../heading';
import PureComponent from 'react-pure-render/component';

type TProps = {
  children: React.Node,
};

export default class H2 extends PureComponent<TProps> {
  render() {
    const {children} = this.props;

    return (
      <Heading component="h2" weight="semi-bold" size="large" {...this.props}>
        {children}
      </Heading>
    );
  }
}
