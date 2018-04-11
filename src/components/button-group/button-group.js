/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';
import {isArray} from 'lodash';
import {Flex} from '../layout';

const StyledButtonGroup = styled(Flex)`
  align-items: center;
  width: ${props => (props.wide ? '100%' : 'auto')};

  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
      justify-content: flex-end;
    `};
`;
/**
 * A basic container for grouped buttons
 * - Clones children to ensure Button components received a 'grouped' prop
 */

type Props = {
  /** One or more Buttons */
  children: Iterable<React.Element<*>>,
  flex?: boolean,
  /** Should this span the full width of the parent? */
  wide?: boolean,
  /** Should there be spacing between the child buttons? */
  spacing?: boolean,
  /** Reverses the order of child buttons */
  reverse?: boolean,
};

export default function ButtonGroup(props: Props) {
  const {children, wide = true, flex, spacing, reverse, ...otherProps} = props;

  const childrenInOrder =
    reverse && isArray(children) ? [...children].reverse() : children;

  return (
    <StyledButtonGroup wide={wide} {...otherProps}>
      {childrenInOrder ? (
        React.Children.map(
          childrenInOrder,
          child =>
            child // $FlowFixMe
              ? React.cloneElement(child, {
                  grouped: !spacing,
                  spacing: !!spacing,
                  reverse,
                  flex,
                })
              : null
        )
      ) : null}
    </StyledButtonGroup>
  );
}
