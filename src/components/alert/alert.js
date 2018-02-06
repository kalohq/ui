/* @flow */
import * as React from 'react';
import styled from 'react-emotion';

import Icon from '../icon';
import Text from '../text';
import {Box} from '../layout';

const TYPE_COLOR_MAP = {
  info: 'blue',
  error: 'pink',
  warning: 'orange',
  confirmation: 'green',
};

const TYPE_ICON_MAP = {
  info: 'info_outline',
  error: 'highlight_off',
  warning: 'error_outline',
  confirmation: 'check_circle',
};

type TProps = {
  children: React.Node,
  type: $Keys<typeof TYPE_COLOR_MAP>,
  showIcon?: boolean,
  justifyContent?: 'left' | 'center',
};

const StyledAlert = styled(Box)`
  border-radius: ${props => props.theme.layout.borderRadius};
  background-color: ${props => props.theme.alerts[props.type]};
`;

export default function Alert(props: TProps) {
  const {
    children,
    showIcon,
    type = 'info',
    justifyContent = 'center',
    ...otherProps
  } = props;

  return (
    <StyledAlert
      padding={['small', 'medium']}
      flexDirection="row"
      alignItems="center"
      justifyContent={justifyContent}
      role="alert"
      type={type}
      {...otherProps}
    >
      {showIcon ? (
        <Icon color={TYPE_COLOR_MAP[type]} marginRight={8}>
          {TYPE_ICON_MAP[type]}
        </Icon>
      ) : null}
      <Text color={TYPE_COLOR_MAP[type]} size="small" multiline={true}>
        {children}
      </Text>
    </StyledAlert>
  );
}
