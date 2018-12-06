/* @flow */
import * as React from 'react';
import styled from 'react-emotion';

import {Box} from '../../layout';

const StyledPaperToolbar = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.grey100};
`;

/**
 * @summary A basic toolbar container to display at the top of paper
 */

export function PaperToolbar(props: {children?: React.Node}) {
  const {children} = props;

  return <StyledPaperToolbar padding={[0, 25]}>{children}</StyledPaperToolbar>;
}
