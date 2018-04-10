import styled from 'react-emotion';

import {Box} from '../../layout';

/**
 * Skeleton page header heading
 */
const SkeletonPageHeaderHeading = styled(Box)`
  margin: 0 auto;
  width: ${props => (props.width ? props.width : 1180)}px;
  height: 80px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export default SkeletonPageHeaderHeading;
