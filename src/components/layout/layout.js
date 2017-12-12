/* @flow */
import React from 'react';
import {parseStyleProps} from 'utils/style';
import PureComponent from 'react-pure-render/component';
import cx from 'classnames';

function makePrimitive(name, DefaultComponent, display, defaultStyle) {
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
        display,
        ...defaultStyle,
        ...otherProps,
      });

      return (
        <Component
          ref={elRef}
          className={cx(className)}
          css={{...style}}
          {...props}
          style={{...propStyle}}
        />
      );
    }
  }

  Primitive.displayName = name;
  return Primitive;
}

/**
 * Layout primitives
 */
export const Box = makePrimitive('Box', 'div', 'flex', {
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: '0',
  alignContent: 'flex-start',
  display: 'flex',
});

export const Flex = makePrimitive('Flex', 'div', 'flex');
export const Block = makePrimitive('Block', 'div', 'block');
export const Inline = makePrimitive('Inline', 'span', 'inline-block', {
  verticalAlign: 'bottom',
});
export const InlineFlex = makePrimitive('InlineFlex', 'span', 'inline-flex');

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */
export const A = makePrimitive('H1', 'a', 'inline-block');
export const I = makePrimitive('I', 'i', 'inline-block');
