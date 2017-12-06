/* @flow */
import * as React from 'react';
import styled from 'react-emotion';

import {Inline} from '../layout';

import type {ICON_SIZE} from './constants';

import {ICONS, ICON_COLORS, DEFAULT_SIZE, DEFAULT_COLOR} from './constants';

type Props = {
  children: string,
  size?: ICON_SIZE,
  color?: $Keys<typeof ICON_COLORS>,
  className?: string,
  onClick?: Function,
};

const StyledIcon = styled(Inline)`
  user-select: none;
  line-height: 1em;
  vertical-align: middle;
  cursor: ${props => (props.interactive ? 'pointer' : 'inherit')};
`;

export default function Icon(props: Props) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    className,
    onClick,
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
      {...otherProps}
    >
      <svg width={size} height={size} style={{fill: color}} aria-hidden="true">
        <title>{children}</title>
        <use href={`#${children}`} />
      </svg>
    </StyledIcon>
  );
}
