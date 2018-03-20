/* @flow */
import React from 'react';
import styled, {css} from 'react-emotion';
import PureComponent from 'react-pure-render/component';

import Text from '../text';
import CHECKED_ICON from './assets/checked.svg';
import INDETERMINATE_ICON from './assets/indeterminate.svg';
import CHECKED_DISABLED_ICON from './assets/checked-disabled.svg';

import {TEXT_SIZE} from '../text/constants';

const CHECKBOX_SIZES = {
  small: 12,
  medium: 14,
  large: 16,
};

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: ${props =>
    props.readonly || props.disabled ? 'default' : 'pointer'};
`;

const StyledCheckbox = styled.div`
  position: relative;
  border-radius: 3px;
  border: 1px solid
    ${props => props.theme.colors.grey500};
  transition: 100ms ease-in-out background-color, border-color;
  height: ${props => CHECKBOX_SIZES[props.size]}px;
  width: ${props => CHECKBOX_SIZES[props.size]}px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.white};

  ${props =>
    props.checked
      ? props.disabled
        ? css`
            background-color: ${props.theme.colors.grey200};
            background-image: url(${CHECKED_DISABLED_ICON});
            border: 1px solid ${props.theme.colors.grey500};
          `
        : css`
            background-color: ${props.theme.colors.grey200};
            background-image: url(${CHECKED_ICON});
            border: 1px solid ${props.theme.colors.blue500};
          `
      : null}

  ${props =>
    props.indeterminate &&
    css`
      background-color: ${props.theme.colors.grey200};
      background-image: url(${INDETERMINATE_ICON});
      border: 1px solid ${props.theme.colors.blue500};
    `}

  &:hover {
    ${props =>
      !props.disabled &&
      !props.readonly &&
      !props.checked &&
      (!props.indeterminate &&
        css`
          background-color: ${props.theme.colors.grey200};
          border-color: ${props.theme.colors.navy600};
        `)};
    }
  }

`;

type TProps = {
  size?: 'small' | 'medium' | 'large',
  checked?: ?boolean,
  indeterminate?: ?boolean,
  readonly?: boolean,
  disabled?: boolean,
  label?: string,
  onClick?: Function,
  name?: string,
};

export default class Checkbox extends PureComponent<TProps> {
  render() {
    const {
      checked = false,
      disabled = false,
      indeterminate = false,
      size = 'medium',
      readonly,
      label,
      onClick,
      name,
      ...otherProps
    } = this.props;

    return (
      <StyledCheckboxContainer
        onClick={readonly || disabled ? null : onClick}
        name={name}
        role="checkbox"
        aria-checked={indeterminate ? 'mixed' : checked}
        disabled={disabled}
        rReadonly={readonly}
      >
        <StyledCheckbox
          size={size}
          checked={checked}
          indeterminate={indeterminate}
          disabled={disabled}
          readonly={readonly}
          {...otherProps}
        />
        {label ? (
          <Text
            marginLeft={10}
            size={size === 'small' ? TEXT_SIZE.EXTRA_SMALL : TEXT_SIZE.SMALL}
            color="navy600"
            multiline={true}
          >
            {label}
          </Text>
        ) : null}
      </StyledCheckboxContainer>
    );
  }
}
