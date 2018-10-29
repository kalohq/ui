/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';

import {Inline} from '../layout';
import DefaultTheme from '../theme';

import type {
  TEXT_WEIGHT,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_HOVER_COLOR,
  TEXT_ALIGN,
} from './constants';

import {WEIGHT_MAP, SIZE_MAP} from './constants';

type TProps = {
  weight?: TEXT_WEIGHT,
  size?: TEXT_SIZE,
  color?: TEXT_COLOR,
  hoverColor?: TEXT_HOVER_COLOR,
  align?: TEXT_ALIGN,
  domElement?: Function | string,
  component?: Function | string,
  multiline?: boolean,
  children?: React.Node,
  className?: string,
  onClick?: Function,
  interactive?: boolean,
  notInteractive?: boolean,
  noUnderline?: boolean,
  resetTransform?: boolean,
  dangerouslySetInnerHTML?: Object,
  target?: string,
  href?: string,
  name?: string,
  theme?: Object,
};

const StyledText = styled(Inline)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: ${props =>
    props.interactive
      ? 'pointer'
      : props.notInteractive ? 'default' : 'inherit'};
  text-align: ${props => props.align};
  text-decoration: ${props => (props.noUnderline ? 'none' : 'inherit')};
  line-height: 1.4;
  font-weight: ${props => WEIGHT_MAP[props.weight]};
  font-size: ${props => SIZE_MAP[props.size]}px;
  color: ${props => props.theme.colors[props.color]};

  &:hover {
    color: ${props => props.theme.colors[props.hoverColor]};
    text-decoration: ${props =>
      props.onClick ? (props.noUnderline ? 'none' : 'underline') : 'inherit'};
  }

  ${props =>
    props.multiline &&
    css`
      white-space: normal;
      text-overflow: initial;
      overflow: visible;
      white-space: pre-wrap;
      word-break: break-word;
    `};

  strong {
    font-weight: ${props => props.theme.typography.fontWeightMedium};
  }
`;

export default function Text(props: TProps) {
  const {
    weight = 'normal',
    size = 'small',
    align = 'unset',
    color = 'navy600',
    hoverColor = 'none',
    interactive,
    noUnderline,
    onClick,
    children,
    theme = DefaultTheme,
    ...otherProps
  } = props;

  return (
    <StyledText
      onClick={onClick}
      weight={weight}
      color={color}
      hoverColor={hoverColor}
      align={align}
      interactive={interactive || onClick}
      noUnderline={noUnderline}
      size={size}
      theme={theme}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
}
