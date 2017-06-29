/* @flow */
import React from 'react';
import Heading from '../heading';

type h2Props = {
  children: React.Element<*>,
};

export default function H2(props: h2Props) {
  const {children} = props;

  return (
    <Heading number={2} weight="normal" size="large" {...props}>
      {children}
    </Heading>
  );
}
