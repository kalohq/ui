/* @flow */
import React from 'react';
import styled from 'react-emotion';

import {InlineFlex} from '../layout';
import Icon from '../icon';
import Text from '../text';

const TAG_COLOR_MAP = {
  blue: {
    backgroundColor: 'blue300',
    borderColor: 'blue600',
  },
  orange: {
    backgroundColor: 'orange300',
    borderColor: 'orange600',
  },
  green: {
    backgroundColor: 'green300',
    borderColor: 'green600',
  },
  red: {
    backgroundColor: 'pink300',
    borderColor: 'pink600',
  },
  purple: {
    backgroundColor: 'purple300',
    borderColor: 'purple600',
  },
  grey: {
    backgroundColor: 'grey300',
    borderColor: 'grey600',
  },
};

const StyledTag = styled(InlineFlex)`
  align-items: center;
  height: 28px;
  transition: color 0.5s ease-in;
  background: ${props =>
    props.theme.colors[TAG_COLOR_MAP[props.tagTheme].backgroundColor]};
  border: 1px solid currentColor;
  color: ${props =>
    props.theme.colors[TAG_COLOR_MAP[props.tagTheme].borderColor]};
  border-radius: 16px;
  padding: 0 16px;
  vertical-align: middle;
  max-width: 100%;
  width: fit-content;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;

const StyledRemove = styled.button`
  position: relative;
  border: 0;
  background-color: transparent;
  height: 28px;
  right: -17px;
  margin-left: -8px;
  top: -1px;
  color: currentColor;
  border-radius: 0 16px 16px 0;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:focus {
    outline: 0;
  }
`;
/**
 * A basic Tag component
 */

type TProps = {
  label?: string,
  theme?: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'grey',
  onClick?: Function,
  onRemove?: Function,
};

export default function Tag(props: TProps) {
  const {label, theme = 'blue', onClick, onRemove, ...otherProps} = props;

  return (
    <StyledTag onClick={onClick} tagTheme={theme} {...otherProps}>
      <Text weight="normal" color="currentColor" size="extra-small">
        {label}
      </Text>

      {onRemove ? (
        <StyledRemove onClick={onRemove}>
          <Icon color="currentColor" size={12}>
            clear
          </Icon>
        </StyledRemove>
      ) : null}
    </StyledTag>
  );
}
