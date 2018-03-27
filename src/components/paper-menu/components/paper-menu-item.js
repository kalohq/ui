/* @flow */
import * as React from 'react';
import {isString} from 'lodash';
import styled, {css} from 'react-emotion';

import {Box} from '../../layout';
import Icon from '../../icon';

const StyledPaperMenuItem = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  background-color: ${props => props.theme.colors.white};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
  transition: all 0.2s ease-in;
  color: inherit;
  padding: 4px 16px;
  user-select: none;
  text-decoration: none;
  min-height: 52px;
  min-width: ${props => props.minWidth};

  &:hover {
    ${props =>
      !props.disabled && css`background-color: ${props.theme.colors.grey300};`};
  }

  ${props =>
    !props.disabled &&
    !props.static &&
    css`
      border-left: 2px solid transparent;
    `} ${props =>
      props.active &&
      css`
        background: ${props.theme.colors.blue500};
        color: #fff;
        padding-top: 0;
      `};

  ${props =>
    props.highlighted &&
    css`
      background: ${props.theme.colors.grey200};
      color: ${props.theme.colors.blue500};
    `};
`;

const StyledPaperMenuItemContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.navy700};

  > * {
    margin-right: 10px !important;
  }

  > *:last-child {
    margin-right: 0px !important;
  }
`;

type Props = {
  icon?: React.Node | string,
  iconAfter?: React.Node | string,
  children?: React.Node,
  active?: boolean,
  success?: boolean,
  disabled?: boolean,
  highlighted?: boolean,
  padded?: boolean,
  name?: string,
  className?: string,
  onClick?: ?Function,
  component?: any,
  minWidth?: number,
};

/**
 * Generic item container for use in paper menus
 */
export default function PaperMenuItem(props: Props) {
  const {
    icon,
    children,
    active,
    disabled,
    highlighted,
    name,
    success,
    className,
    onClick,
    component = Box,
    minWidth,
    iconAfter,
    ...otherProps
  } = props;

  return (
    <StyledPaperMenuItem
      minWidth={minWidth ? minWidth : 'auto'}
      onClick={onClick}
      name={name}
      component={component}
      className={className}
      highlighted={highlighted}
      active={active}
      success={success}
      disabled={disabled}
      data-test="ui-paper-menu-item"
      {...otherProps}
    >
      {icon ? (
        <Box marginRight={10}>
          {isString(icon) ? <Icon size={16}>{String(icon)}</Icon> : icon}
        </Box>
      ) : null}

      <StyledPaperMenuItemContent>{children}</StyledPaperMenuItemContent>

      {iconAfter ? (
        <Box marginLeft={10}>
          {isString(iconAfter) ? (
            <Icon size={16}>{String(iconAfter)}</Icon>
          ) : (
            iconAfter
          )}
        </Box>
      ) : null}
    </StyledPaperMenuItem>
  );
}
