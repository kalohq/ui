/* @flow */
import React from 'react';
import {
  parseStyleProps,
  cleanProps,
  spacing,
  filterStyleProps,
} from 'utils/style';
import PureComponent from 'react-pure-render/component';
import styled, {cx} from 'react-emotion';

const makePrimitive = (name, DefaultComponent) => {
  class Primitive extends PureComponent {
    render() {
      const {
        component: Component = DefaultComponent,
        elRef,
        style: propStyle,
        className,
        ...otherProps
      } = this.props;

      const {props, style} = parseStyleProps({
        ...otherProps,
      });

      const cleanedProps = cleanProps(props);

      return (
        <Component
          ref={elRef}
          className={className ? cx(className) : null}
          css={{...style}}
          {...cleanedProps}
          style={{...propStyle}}
        />
      );
    }
  }

  Primitive.displayName = `Primitive${name}`;
  return Primitive;
};

/** 
 * Layout primitives
 */

export const Box = styled(makePrimitive('Box', 'div'))`
  position: relative;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
  align-content: flex-start;
  display: flex;
  ${spacing};
  ${filterStyleProps};
`;
Box.displayName = 'Box';

export const Flex = styled(makePrimitive('Flex', 'div'))`
  display: flex;
  ${spacing};
  ${filterStyleProps};
`;
Flex.displayName = 'Flex';

export const Block = styled(makePrimitive('Block', 'div'))`
  display: block;
  ${spacing};
  ${filterStyleProps};
`;
Block.displayName = 'Block';

export const Inline = styled(makePrimitive('Inline', 'span'))`
  display: inline-block;
  vertical-align: bottom;
  ${spacing};
  ${filterStyleProps};
`;
Inline.displayName = 'Inline';

export const InlineFlex = styled(makePrimitive('InlineFlex', 'span'))`
  display: inline-flex;
  ${spacing};
  ${filterStyleProps};
`;
InlineFlex.displayName = 'InlineFlex';

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */

export const A = styled(makePrimitive('A', 'a'))`
  display: inline-flex;
  ${spacing};
  ${filterStyleProps};
`;
A.displayName = 'A';
