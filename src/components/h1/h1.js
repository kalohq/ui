/* @flow */
import React from 'react';
import Heading from '../heading';

type h1Props = {
  children: React.Element<*>,
};

export default function H1(props: h1Props) {
  const {children} = props;

  return (
    <Heading number={1} weight="normal" size="extra-large" {...props}>
      {children}
    </Heading>
  );
}
