/* @flow */
import React from 'react';
import styled from 'react-emotion';

import {Box} from '../layout';
import Icon from '../icon';
import Text from '../text';

const STATE_TAG_BACKGROUND_MAP = {
  blue: 'blue500',
  orange: 'orange500',
  green: 'green500',
  red: 'red500',
  purple: 'purple500',
  grey: 'grey700',
};

const StyledStateTag = styled(Box)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: ${props => (props.interactive ? 'pointer' : 'default')};
  line-height: 1em;
  color: ${props =>
    props.theme.colors[STATE_TAG_BACKGROUND_MAP[props.tagTheme]]};
`;

const StyledStateTagIcon = styled(Icon)`
  display: flex;
  flex-direction: column;
`;

/**
 * A tag to display the states of Projects, Tasks, and Invoices
 */

type TProps = {
  /** Sets the color of the copy and icon */
  theme?: 'blue' | 'orange' | 'green' | 'red' | 'purple' | 'grey',
  /** An icon to display to the left of the tag */
  leftIcon?: string,
  /** An icon to display to the right of the tag */
  rightIcon?: string,
  /** A copy label to display */
  label?: string,
  /** Is the StateTag editable? */
  editable?: boolean,
};

export default function StateTag(props: TProps) {
  const {label, theme, leftIcon, rightIcon, editable, ...otherProps} = props;

  return (
    <StyledStateTag tagTheme={theme} interactive={editable} {...otherProps}>
      {leftIcon ? (
        <StyledStateTagIcon marginRight={label ? 8 : 0}>
          {leftIcon}
        </StyledStateTagIcon>
      ) : null}

      {label ? (
        <Text color="none" size="small" weight="medium">
          {label}
        </Text>
      ) : null}

      {rightIcon ? (
        <StyledStateTagIcon marginLeft={label ? 8 : 0}>
          {rightIcon}
        </StyledStateTagIcon>
      ) : null}
    </StyledStateTag>
  );
}
