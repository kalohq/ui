/* @flow */
import * as React from 'react';
import Heading from '../heading';

type Props = {
  children: React.Node,
};

export default function H2(props: Props) {
  const {children} = props;

  return (
    <Heading number={2} weight="semi-bold" size="large" {...props}>
      {children}
    </Heading>
  );
}
