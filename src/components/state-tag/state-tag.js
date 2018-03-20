/* @flow */
import React from 'react';
import styled from 'react-emotion';

import {InlineFlex} from '../layout';
import Icon from '../icon';
import Text from '../text';

const STATE_TAG_BACKGROUND_MAP = {
  blue: 'blue500',
  orange: 'orange500',
  green: 'green500',
  red: 'pink500',
  purple: 'purple500',
  grey: 'grey700',
};

const StyledStateTag = styled(InlineFlex)`
  flex-direction: row;
  align-items: center;
  line-height: 1em;
  padding: 4px 8px;
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
  label?: ?string,
  /** Should the label be displayed? */
  showLabel?: boolean,
};

export default function StateTag(props: TProps) {
  const {
    label,
    showLabel = true,
    theme,
    leftIcon,
    rightIcon,
    ...otherProps
  } = props;

  return (
    <StyledStateTag tagTheme={theme} {...otherProps}>
      {leftIcon ? (
        <StyledStateTagIcon marginRight={label ? 8 : 0}>
          {leftIcon}
        </StyledStateTagIcon>
      ) : null}

      {showLabel && label ? (
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
