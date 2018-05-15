/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';

import {Box} from '../layout';
import FieldLabel from '../field-label';

export const HEIGHT = 26;

/**
 * ToggleButton
 *
 * A standard toggle button for toggling between two states
 */

const StyledToggleButton = styled.div`
  border-radius: 20px;
  transition: all 0.25s ease-out;
  width: 56px;
  height: ${HEIGHT}px;
  cursor: pointer;
  padding: 3px 0 3px ${props => (props.selected ? '32px' : '3px')};
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.grey300};

  ${props =>
    props.toggleButtonTheme === 'default' &&
    props.selected &&
    css`
      background-color: ${props.theme.colors.blue500};
    `};

  ${props =>
    props.toggleButtonTheme === 'green' &&
    props.selected &&
    css`
      background-color: ${props.theme.colors.green500};
    `};

  ${props =>
    props.toggleButtonTheme === 'orangeToGreen' &&
    css`
      background-color: ${props.selected
        ? props.theme.colors.green500
        : props.theme.colors.orange500};
    `};

  ${props =>
    props.toggleButtonTheme === 'orange' &&
    props.selected &&
    css`
      background-color: ${props.theme.colors.orange500};
    `};
`;

const StyledButton = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${props =>
    props.toggleButtonTheme === 'orangeToGreen'
      ? props.theme.colors.white
      : props.selected ? props.theme.colors.white : props.theme.colors.grey500};
`;

type TProps = {
  /** Is the toggle toggled? */
  value?: boolean,
  /** A function to call when toggled */
  onChange: Function,
  value?: boolean,
  /** A label to display next to the toggle button  */
  label?: string,
  /** The overall visual theme of the button */
  theme?: 'default' | 'orange' | 'green' | 'orangeToGreen',
};

export default function ToggleButton(props: TProps) {
  const {
    value = false,
    theme = 'default',
    onChange,
    label,
    ...otherProps
  } = props;

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      data-test="ui-toggle-button"
      onClick={() => onChange(!value)}
      {...otherProps}
    >
      <StyledToggleButton selected={value} toggleButtonTheme={theme}>
        <StyledButton toggleButtonTheme={theme} selected={value} />
      </StyledToggleButton>
      {label ? (
        <FieldLabel marginLeft="medium" marginBottom={0}>
          {label}
        </FieldLabel>
      ) : null}
    </Box>
  );
}
