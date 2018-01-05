/* @flow */
import * as React from 'react';
import Heading from '../heading';

type h3Props = {
  children: React.Node,
};

export default function H3(props: h3Props) {
  const {children} = props;

  return (
    <Heading component="h3" weight="semi-bold" size="small" {...props}>
      {children}
    </Heading>
  );
}
