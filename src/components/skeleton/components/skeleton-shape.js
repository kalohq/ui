/* @flow */
import styled, {keyframes} from 'react-emotion';
import {Box} from '../../layout';

const SkeletonSheen = keyframes`
  from {
    transform:translateX(-100%);
  }
	to {
    transform:translateX(100%);
  }
`;

/**
 * A low-level skeleton shape that implements the basic styling
 * and sheen animation
 */
const SkeletonShape = styled(Box)`
  border-radius: ${props => (props.shape === 'circle' ? '50%' : 0)};
  background-color: ${props => props.theme.colors.grey100};
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    top: 0;
    transform: translateX(100%);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: ${SkeletonSheen} 1s infinite 2s;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    );
  }
`;

export default SkeletonShape;
