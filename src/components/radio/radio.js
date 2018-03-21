/* @flow */
import React from 'react';
import {isNull} from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled, {css} from 'react-emotion';

import {pickStyles} from '../../utils/style';

import Text from '../text';
import {Box} from '../layout';

const RADIO_SIZES = {
  small: 14,
  medium: 16,
};

const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: ${props =>
    props.readonly || props.disabled ? 'default' : 'pointer'};
`;

const StyledRadio = styled(Box)`
  border-radius: 50%;
  position: relative;
  border: 1px solid
    ${props =>
      props.checked ? props.theme.colors.blue500 : props.theme.colors.grey500};
  background-color: #fff;
  background-position: center center;
  background-size: 80%;
  transition: all 200ms ease-in-out;
  width: ${props => RADIO_SIZES[props.size]}px;
  height: ${props => RADIO_SIZES[props.size]}px;

  &:hover {
    ${props =>
      !props.disabled &&
      !props.readonly &&
      !props.checked &&
      css`
        border-color: ${props.theme.colors.grey600};
      `};
  }
`;

const StyledRadioIcon = styled.span`
  display: inline-block;
  transition-duration: 0.15s !important;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${props =>
    props.disabled ? props.theme.colors.grey500 : props.theme.colors.blue500};
  border: 3px solid #fff;
`;

type RadioProps = {
  /** Is the radio button checked */
  checked?: ?boolean,
  /** Disables user interaction although can still be checked */
  readonly?: boolean,
  /** Changes the size of the radio */
  size?: 'small' | 'medium',
  /** Disables user interaction */
  disabled?: boolean,
  /** A label to display to the right of the radio button */
  label?: string,
  /** A function to call when a user clicks */
  onClick?: Function,
  /** A name to pass down to the DOM - useful for testing */
  name?: string,
};

export function Radio(props: RadioProps) {
  const {
    checked = false,
    size = 'medium',
    disabled,
    readonly,
    label,
    onClick,
    name,
    ...otherProps
  } = props;

  return (
    <StyledRadioContainer
      onClick={readonly || disabled ? null : onClick}
      name={name}
      role="radio"
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <StyledRadio
        disabled={disabled}
        readonly={readonly}
        checked={checked}
        size={size}
        {...pickStyles(otherProps)}
        {...otherProps}
      >
        <ReactCSSTransitionGroup
          transitionName="t-scale"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {checked || isNull(checked) ? (
            <StyledRadioIcon disabled={disabled} />
          ) : null}
        </ReactCSSTransitionGroup>
      </StyledRadio>
      {label ? (
        <Text marginLeft={10} size="small" color="navy700" component="label">
          {label}
        </Text>
      ) : null}
    </StyledRadioContainer>
  );
}

export default Radio;
