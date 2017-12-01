/* @flow */
import * as React from 'react';
import Heading from '../heading';
import {H4 as H4Primitive} from '../layout';

type Props = {
  children: React.Node,
};

export default function H4(props: Props) {
  const {children} = props;

  return (
    <Heading component={H4Primitive} weight="normal" {...props}>
      {children}
    </Heading>
  );
}
