/* @flow */
import * as React from 'react';
import styled from 'react-emotion';
import PureComponent from 'react-pure-render/component';

import Icon from '../icon';
import Text from '../text';

import type {TEXT_COLOR, TEXT_SIZE} from '../text/constants';

type TProps = {
  /** The heading content */
  children: React.Node,
  /** Sets the text color and fill color of any child icon */
  color?: TEXT_COLOR,
  /** Sets the size of the heading */
  size?: TEXT_SIZE,
  /** Sets interactive styles for the underlying text component - See Text component */
  hover?: 'underline' | 'none',
  /** Displays an icon before the heading */
  icon?: string,
  /** Displays an icon after the heading */
  iconAfter?: string,
  /** Adds padding between the icon and heading text */
  iconPadding?: number,
};

const StyledHeading = styled(Text)`
  line-height: 1.25em !important;

  > i {
    position: relative;
    left: 2px;
    vertical-align: top;
  }
`;

export default class Heading extends PureComponent<TProps> {
  render() {
    const {
      children,
      color = 'navy700',
      icon = false,
      size = 'small',
      iconAfter,
      hover = false,
      iconPadding = 10,
      ...otherProps
    } = this.props;

    return (
      <StyledHeading
        size={size}
        interactive={hover === 'interactive'}
        display="block"
        color={color}
        {...otherProps}
      >
        {icon ? (
          <Icon
            size={size === 'extra-large' ? 24 : 14}
            color={color}
            paddingRight={iconPadding}
          >
            {icon}
          </Icon>
        ) : null}
        {children}
        {iconAfter ? (
          <Icon
            size={size === 'extra-large' ? 24 : 14}
            color={color}
            paddingLeft={iconPadding}
          >
            {iconAfter}
          </Icon>
        ) : null}
      </StyledHeading>
    );
  }
}
