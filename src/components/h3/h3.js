/* @flow */
import * as React from 'react';
import Heading from '../heading';
import PureComponent from 'react-pure-render/component';

type TProps = {
  children: React.Node,
};

export default class H3 extends PureComponent<TProps> {
  render() {
    const {children} = this.props;

    return (
      <Heading component="h3" weight="semi-bold" size="small" {...this.props}>
        {children}
      </Heading>
    );
  }
}
