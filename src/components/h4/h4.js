/* @flow */
import * as React from 'react';
import Heading from '../heading';

type Props = {
  children: React.Node,
};

export default function H4(props: Props) {
  const {children} = props;

  return (
    <Heading number={4} weight="normal" {...props}>
      {children}
    </Heading>
  );
}
