/* @flow */
import * as React from 'react';
import styled from 'react-emotion';
import {injectGlobal} from 'emotion';
import {I} from '../layout';

import MaterialIconsWoff2 from './fonts/MaterialIcons/MaterialIcons-Regular.woff2';
import MaterialIconsWoff from './fonts/MaterialIcons/MaterialIcons-Regular.woff';
import MaterialIconsTtf from './fonts/MaterialIcons/MaterialIcons-Regular.ttf';
import FontelloWoff from './fonts/fontello/fontello.woff';
import FontelloTtf from './fonts/fontello/fontello.ttf';

import type {
  ICON_SIZE,
  ICON_COLOR,
  ICON_FAMILY,
  ICON_WEIGHT,
} from './constants';

import {
  DEFAULT_SIZE,
  DEFAULT_WEIGHT,
  DEFAULT_COLOR,
  DEFAULT_FAMILY,
  FONTELLO_ICONS,
} from './constants';

type Props = {
  children?: React.Node,
  size?: ICON_SIZE,
  color?: ICON_COLOR,
  family?: ICON_FAMILY,
  weight?: ICON_WEIGHT,
  className?: string,
  onClick?: Function,
};

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'), local('MaterialIcons-Regular'),
      url(${MaterialIconsWoff2}) format('woff2'),
      url(${MaterialIconsWoff}) format('woff'),
      url(${MaterialIconsTtf}) format('truetype');
  }

  @font-face {
    font-family: 'fontello';
    src: url(${FontelloWoff}) format('woff'),
      url(${FontelloTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;

const StyledIcon = styled(I)`
  font-family: ${props =>
    props.family === 'fontello' ? 'fontello' : 'Material Icons'};
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  user-select: none;
  word-break: normal;
  line-height: 1em;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';

  cursor: ${props => (props.interactive ? 'cursor' : 'inherit')};
  font-size: ${props => props.size}px;
  height: ${props => props.size}px;
  color: ${props => props.theme.colors[props.color]};
`;

const isString = (test: any): boolean => typeof test === 'string';

export default function Icon(props: Props) {
  const {
    children,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    weight = DEFAULT_WEIGHT,
    family = DEFAULT_FAMILY,
    className,
    onClick,
    ...otherProps
  } = props;

  return (
    <StyledIcon
      size={size}
      family={family}
      weight={weight}
      color={color}
      interactive={!!onClick}
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      {family === 'fontello' && isString(children) ? (
        FONTELLO_ICONS[String(children)] || children
      ) : (
        children
      )}
    </StyledIcon>
  );
}
