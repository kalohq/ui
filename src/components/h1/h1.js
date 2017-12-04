/* @flow */
import * as React from 'react';
import Heading from '../heading';

type Props = {
  children?: React.Node,
};

export default function H1(props: Props) {
  const {children} = props;

  return (
    <Heading number={1} weight="normal" size="extra-large" {...props}>
      {children}
    </Heading>
  );
}
