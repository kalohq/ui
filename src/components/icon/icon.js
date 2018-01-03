/* @flow */
import * as React from 'react';
import styled from 'react-emotion';
import {Inline} from '../layout';
import DefaultTheme from '../theme';

import COLORS from '../../design-tokens/tokens';

import type {ICON_SIZE} from './constants';

import {ICONS, ICON_COLORS, DEFAULT_SIZE, DEFAULT_COLOR} from './constants';

type Props = {
  children: string,
  size?: ICON_SIZE,
  color?: $Keys<typeof ICON_COLORS>,
  className?: string,
  onClick?: Function,
  theme?: Object,
};

const StyledIcon = styled(Inline)`
  user-select: none;
  line-height: 1em;
  vertical-align: middle;
  cursor: ${props => (props.interactive ? 'cursor' : 'inherit')};
  font-size: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  color: ${props => props.theme.colors[props.color]};
`;

export default function Icon(props: Props) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    className,
    onClick,
    theme = DefaultTheme,
    ...otherProps
  } = props;

  if (!ICONS.properties[children]) {
    console.error(`UI ICON - ${children} is not a defined icon`);
  }

  return (
    <StyledIcon
      className={className}
      component="i"
      interactive={!!onClick}
      onClick={onClick}
      theme={theme}
      size={size}
      {...otherProps}
    >
      <svg
        width={size}
        height={size}
        style={{fill: COLORS[color]}}
        aria-hidden="true"
      >
        <title>{children}</title>
        <use href={`#${children}`} />
      </svg>
    </StyledIcon>
  );
}
