import React from 'react';
import PureComponent from 'react-pure-render/component';
import {parseStyleProps} from 'utils/style';
import cx from 'classnames';

/** Make a new primitive layout component */
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
          {...props}
          style={{...style, ...propStyle}}
        />
      );
    }
  }

  Primitive.displayName = name;
  return Primitive;
}

// Building Blocks
export const Box = makePrimitive('Box', 'div', 'flex', {
  // https://github.com/facebook/css-layout#default-values
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 0,
  alignContent: 'flex-start',
});
export const Flex = makePrimitive('Flex', 'div', 'flex');
export const Block = makePrimitive('Block', 'div', 'block');
export const Inline = makePrimitive('Inline', 'span', 'inline-block', {
  verticalAlign: 'bottom',
});
export const InlineFlex = makePrimitive('InlineFlex', 'span', 'inline-flex');

/**
 * TODO: All of the html primitives should follow here so our api is consistent to the very root...
 * - Eg. Button, Input, Select, Table etc.
 */
export const A = makePrimitive('A', 'a', 'inline-block');
