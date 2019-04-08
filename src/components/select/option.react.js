/* @flow */
import * as React from 'react';

type TProps = {
  /** A value that's passed back via onSelect when a user selects the option */
  value?: any,
  /** Whether or not this option is selected. */
  selected?: boolean,
  /** Dropdown children */
  children: React.Node,
};

export default function Option(props: TProps) {
  return <div>{props.children}</div>;
}
