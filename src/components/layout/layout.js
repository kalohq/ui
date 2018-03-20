/* @flow */
import React from 'react';
import {parseStyleProps, cleanProps} from '../../utils/style';
import PureComponent from 'react-pure-render/component';
import styled, {cx} from 'react-emotion';

const makePrimitive = (name, DefaultComponent, defaultStyle) => {
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
          css={{...defaultStyle, ...style}}
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

export const Box = styled(
  makePrimitive('Box', 'div', {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexShrink: 0,
    alignContent: 'flex-start',
    display: 'flex',
  })
)();
Box.displayName = 'Box';

export const Flex = styled(makePrimitive('Flex', 'div', {display: 'flex'}))();
Flex.displayName = 'Flex';

export const Block = styled(
  makePrimitive('Block', 'div', {display: 'block'})
)();
Block.displayName = 'Block';

export const Inline = styled(
  makePrimitive('Inline', 'span', {
    display: 'inline-block',
    verticalAlign: 'bottom',
  })
)();
Inline.displayName = 'Inline';

export const InlineFlex = styled(
  makePrimitive('InlineFlex', 'span', {display: 'inline-flex'})
)();
InlineFlex.displayName = 'InlineFlex';

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */

export const A = styled(makePrimitive('A', 'a', {display: 'inline-flex'}))();
A.displayName = 'A';
