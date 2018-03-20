/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';
import PureComponent from 'react-pure-render/component';

const StyledButtonGroup = styled.div`
  display: flex;
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

type TProps = {
  /** One or more Buttons */
  children: React.Element<*>,
  flex?: boolean,
  /** Should this span the full width of the parent? */
  wide?: boolean,
  /** Should there be spacing between the child buttons? */
  spacing?: boolean,
  /** Reverses the order of child buttons */
  reverse?: boolean,
};

export default class ButtonGroup extends PureComponent<TProps> {
  render() {
    const {
      children,
      wide = true,
      flex,
      spacing,
      reverse,
      ...otherProps
    } = this.props;

    return (
      <StyledButtonGroup reverse={reverse} wide={wide} {...otherProps}>
        {children ? (
          React.Children.map(
            children,
            child =>
              child
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
}
