/* @flow */
import * as React from 'react';
import Heading from '../heading';

type Props = {
  children: React.Node,
};

export default function H4(props: Props) {
  const {children} = props;

  return (
    <Heading component="h4" weight="normal" size="500" {...props}>
      {children}
    </Heading>
  );
}
