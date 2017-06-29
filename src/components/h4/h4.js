/* @flow */
import React from 'react';
import Heading from '../heading';

type h4Props = {
  children: React.Element<*>,
};

export default function H4(props: h4Props) {
  const {children} = props;

  return (
    <Heading number={4} weight="normal" {...props}>
      {children}
    </Heading>
  );
}
