/* @flow */
import * as React from 'react';
import Heading from '../heading';
import {H1 as H1Primitive} from '../layout';

type Props = {
  children?: React.Node,
};

export default function H1(props: Props) {
  const {children} = props;

  return (
    <Heading
      component={H1Primitive}
      weight="normal"
      size="extra-large"
      {...props}
    >
      {children}
    </Heading>
  );
}
