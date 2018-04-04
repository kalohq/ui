/* @flow */
import * as React from 'react';
import styled from 'react-emotion';
import {pure} from 'recompose';

import SpacerBox from './skeleton-spacer-box';

import {Box} from '../../layout';

const StyledSkeletonPageHeaderToolbar = styled(Box)`
  border-top: 1px solid ${props => props.theme.colors.grey300};
`;

/** Skeleton page header heading */

type TProps = {
  width?: number,
  children: React.Node,
};

function SkeletonPageHeaderToolbar(props: TProps) {
  const {width = 1180, children} = props;
  return (
    <StyledSkeletonPageHeaderToolbar>
      <Box margin={[0, 'auto']} width={width}>
        <SpacerBox height={46}>{children}</SpacerBox>
      </Box>
    </StyledSkeletonPageHeaderToolbar>
  );
}

export default pure(SkeletonPageHeaderToolbar);
