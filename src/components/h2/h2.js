/* @flow */
import * as React from 'react';
import Heading from '../heading';
import {H2 as H2Primitive} from '../layout';

type Props = {
  children: React.Node,
};

export default function H2(props: Props) {
  const {children} = props;

  return (
    <Heading component={H2Primitive} weight="semi-bold" size="large" {...props}>
      {children}
    </Heading>
  );
}
