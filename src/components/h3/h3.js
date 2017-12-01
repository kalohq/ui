/* @flow */
import * as React from 'react';
import Heading from '../heading';
import {H3 as H3Primitive} from '../layout';

type h3Props = {
  children: React.Node,
};

export default function H3(props: h3Props) {
  const {children} = props;

  return (
    <Heading component={H3Primitive} weight="semi-bold" size="small" {...props}>
      {children}
    </Heading>
  );
}
