/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';
import {Inline, Block} from '../layout';
import {isString} from 'lodash';

import type {
  TEXT_WEIGHT,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_HOVER_COLOR,
  TEXT_ALIGN,
} from './constants';

import {
  DEFAULT_HOVER_COLOR,
  DEFAULT_COLOR,
  DEFAULT_WEIGHT,
  DEFAULT_SIZE,
  DEFAULT_ALIGN,
  WEIGHT_MAP,
  SIZE_MAP,
} from './constants';

type textProps = {
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
};

const StyledText = styled(Inline)`
  font-family: 'WebFaktSoftPro', sans-serif;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: ${props =>
    props.interactive
      ? 'pointer'
      : props.notInteractive ? 'default' : 'inherit'};
  vertical-align: middle;
  text-align: ${props => props.align};
  text-decoration: ${props => (props.noUnderline ? 'none' : 'inherit')};
  font-weight: ${props => WEIGHT_MAP[props.weight]};
  font-size: ${props => SIZE_MAP[props.size]}px;
  color: ${props => props.theme.colors[props.color]};

  &:hover {
    color: ${props => props.theme.colors[props.hoverColor]};
    text-decoration: ${props => (props.noUnderline ? 'none' : 'inherit')};
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

export default function Text(props: textProps) {
  const {
    children,
    className,
    onClick,
    weight = DEFAULT_WEIGHT,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    hoverColor = DEFAULT_HOVER_COLOR,
    component = Inline,
    multiline,
    align = DEFAULT_ALIGN,
    interactive,
    notInteractive,
    noUnderline,
    dangerouslySetInnerHTML,
    target,
    href,
    name,
    ...otherProps
  } = props;

  const tagOverride = isString(component)
    ? ['h1', 'h2', 'h3', 'h4'].indexOf(component) > -1 ? Block : Inline
    : component;

  const childrenProp =
    children === undefined ? {dangerouslySetInnerHTML} : {children};

  const Component = StyledText.withComponent(tagOverride);

  return (
    <Component
      weight={weight}
      color={color}
      size={size}
      hoverColor={hoverColor}
      align={align}
      multiline={multiline}
      interactive={interactive}
      notInteractive={notInteractive}
      noUnderline={noUnderline}
      component={component}
      onClick={onClick}
      className={className}
      name={name}
      target={target}
      href={href}
      {...childrenProp}
      {...otherProps}
    />
  );
}
