/* @flow */
import React from 'react';
import styled from 'react-emotion';

import {Box} from '../layout';

const Styled{{exports}} = styled(Box)``;
/**
 * {{description}}
 */

type TProps = {
  children?: React$Node,
};

export default function {{exports}}(props: TProps) {
  const {children, ...otherProps} = props;

  return (
    <Styled{{exports}}>
      {children}
    </Styled{{exports}}>
  );
}
