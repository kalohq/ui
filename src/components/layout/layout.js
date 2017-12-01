/* @flow */
import {spaceProps, parseStyleProps} from 'utils/style';
import styled from 'react-emotion';
import {cx} from 'emotion';

/**
 * Layout primitives
 */

const wrapClassName = props => (props.className ? cx(props.className) : '');

export const Box = styled.div`
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
  align-content: flex-start;
  display: flex;
  ${wrapClassName};
  ${parseStyleProps};
`;
Box.displayName = 'Box';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  ${wrapClassName};
  ${parseStyleProps};
`;
Flex.displayName = 'Flex';

export const Block = styled.div`
  display: block;
  ${wrapClassName};
  ${parseStyleProps};
`;
Block.displayName = 'Block';

export const Inline = styled.span`
  display: inline-block;
  vertical-align: bottom;
  ${wrapClassName};
  ${parseStyleProps};
`;
Inline.displayName = 'Inline';

export const InlineFlex = styled.span`
  display: inline-flex;
  ${wrapClassName};
  ${parseStyleProps};
`;
InlineFlex.displayName = 'InlineFlex';

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */
export const A = styled('a')`
  display: inline-block;
  ${wrapClassName};
  ${spaceProps};
`;
A.displayName = 'A';

export const H1 = styled.h1`
  display: block;
  ${wrapClassName};
  ${spaceProps};
`;
H1.displayName = 'H1';

export const H2 = styled.h2`
  display: block;
  ${wrapClassName};
  ${spaceProps};
`;
H2.displayName = 'H2';

export const H3 = styled.h3`
  display: block;
  ${wrapClassName};
  ${spaceProps};
`;
H3.displayName = 'H3';

export const H4 = styled.h4`
  display: block;
  ${wrapClassName};
  ${spaceProps};
`;
H4.displayName = 'H4';
