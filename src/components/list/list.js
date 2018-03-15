/* @flow */
import * as React from 'react';
import styled, {css} from 'react-emotion';

import TOKENS from '../../design-tokens/tokens';

const SPACING_MAP = {
  none: TOKENS.spacingNone,
  small: TOKENS.spacingSmall,
  medium: TOKENS.spacingMedium,
  large: TOKENS.spacingLarge,
  'extra-large': TOKENS.spacingExtraLarge,
};

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: ${props => props.justify};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'initial')};

  ${props =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      max-width: 100%;
    `};

  ${props =>
    props.type === 'horizontal' &&
    css`
      flex-direction: row;
      max-width: 100%;
    `};

  ${props =>
    props.type === 'grid' &&
    css`
      flex-wrap: wrap;
      justify-content: flex-start;
    `};

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    grid-gap: ${props => SPACING_MAP[props.spacing]};
  }
`;

const StyledListItem = styled.li`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: ${props => (100 / props.columns).toFixed(2)}%;
  min-width: ${props => (100 / props.columns).toFixed(2)}%;
  flex: 1 1 ${props => (100 / props.columns).toFixed(2)}%;

  ${props =>
    props.type === 'grid' &&
    css`
      display: block;
      padding: ${SPACING_MAP[props.spacing]} 0 0 ${SPACING_MAP[props.spacing]};
    `};

  ${props =>
    props.type === 'vertical' &&
    css`
      padding-bottom: ${SPACING_MAP[props.spacing]};
    `};

  @supports (display: grid) {
    padding: 0;
    max-width: unset;
    min-width: unset;
    flex: 1;
  }
`;

type TProps = {
  /** List children */
  children?: React.Element<*>,
  /** Direction/Layout of list  */
  type?: 'horizontal' | 'vertical' | 'grid',
  /** Should list items wrap on to new rows? */
  wrap?: boolean,
  /** Spacing between list items */
  spaced?: 'small' | 'medium' | 'large' | 'extra-large' | 'none',
  /** Number of columns for horizontal and grid layouts */
  columns?: number,
  /** How should the columns be centered horizontally? */
  justify?: string,
};

export default function List(props: TProps) {
  const {
    type = 'vertical',
    children,
    wrap,
    spaced = 'small',
    columns = 1,
    justify,
  } = props;

  return (
    <StyledList
      columns={columns}
      spacing={spaced}
      justify={justify}
      wrap={wrap}
      type={type}
    >
      {React.Children.map(
        children,
        (child, index) =>
          child ? (
            <StyledListItem
              key={child.key || index}
              type={type}
              spacing={spaced}
              columns={columns}
            >
              {child}
            </StyledListItem>
          ) : null
      )}
    </StyledList>
  );
}
