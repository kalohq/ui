/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';

import {Box} from '../layout';

import tokens from '../../design-tokens/tokens';

const SHADOW_LEVELS_MAP = {
  '0': tokens.boxShadowLevel0,
  '1': tokens.boxShadowLevel0,
  '2': tokens.boxShadowLevel1,
  '3': tokens.boxShadowLevel2,
  '4': tokens.boxShadowLevel3,
  '5': tokens.boxShadowLevel4,
};

const StyledPaper = styled(Box)`
  position: relative;
  background: white;
  box-sizing: content-box;
  transition: all 0.2s ease-in-out;
  cursor: ${props => (props.interactive ? 'pointer' : null)};
  margin: ${props => (props.focused ? '0 - 10px' : null)};

  border: ${props =>
    props.border ? `1px solid ${props.theme.colors.grey300}` : 0};
  border-radius: ${props => (props.rounded ? '5px' : 0)};
  box-shadow: ${props => SHADOW_LEVELS_MAP[props.level]};

  &:hover {
    box-shadow: ${props => SHADOW_LEVELS_MAP[props.hoverLevel]};
  }

  ${props =>
    props.wireframe &&
    css`
      background: transparent;
      border: 1px dashed ${props.theme.colors.grey500};
    `};

  ${props =>
    props.opaque &&
    css`
      background: none;
      border: 0;
      box-shadow: none !important;
    `};
`;
type Props = {
  focused?: boolean,
  rounded?: boolean,
  padded?: boolean,
  border?: boolean,
  children: React.Node,
  elevation?: number,
  hoverElevation?: number,
  className?: string | Object,
  opaque?: boolean,
  wireframe?: boolean,
  onClick?: Function,
};

/**
 * @summary This is the kalo paper component.
 * It is in charge of implementing the box-shadow around
 * our cards and the focus/blur animations.
 *
 */
export default function Paper(props: Props) {
  const {
    focused,
    padded,
    border = true,
    children,
    elevation = 1,
    hoverElevation = 1,
    rounded = true,
    opaque,
    wireframe,
    onClick,
    ...otherProps
  } = props;

  const zDepth = Math.min(elevation, 5);
  const hoverZDepth = Math.min(hoverElevation, 5);

  return (
    <StyledPaper
      focused={focused}
      border={border}
      rounded={rounded}
      padded={padded}
      opaque={opaque}
      wireframe={wireframe}
      interactive={!!onClick}
      level={zDepth}
      hoverLevel={hoverZDepth}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </StyledPaper>
  );
}
