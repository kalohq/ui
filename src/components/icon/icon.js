/* @flow */
import * as React from 'react';
import styled from 'react-emotion';
import {Inline} from '../layout';
import DefaultTheme from '../theme';

import type {ICON_SIZE, ICON_COLOR} from './constants';

import {ICONS, DEFAULT_SIZE, DEFAULT_COLOR} from './constants';

type Props = {
  children: $Keys<typeof ICONS>,
  size?: ICON_SIZE,
  color?: ICON_COLOR,
  className?: string,
  onClick?: Function,
  theme?: Object,
  title?: string,
};

const StyledIcon = styled(Inline)`
  user-select: none;
  line-height: 1em;
  vertical-align: middle;
  cursor: ${props => (props.interactive ? 'pointer' : 'inherit')};
  font-size: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  fill: ${props => props.theme.colors[props.color]};
`;

export default function Icon(props: Props) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    className,
    onClick,
    theme = DefaultTheme,
    title,
    ...otherProps
  } = props;

  return (
    <StyledIcon
      className={className}
      component="i"
      interactive={!!onClick}
      onClick={onClick}
      theme={theme}
      size={size}
      color={color}
      title={title}
      {...otherProps}
    >
      <svg width={size} height={size} aria-hidden="true">
        <title>{title ? title : children}</title>
        <use xlinkHref={`#${children}`} />
      </svg>
    </StyledIcon>
  );
}
