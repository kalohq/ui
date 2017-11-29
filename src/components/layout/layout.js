/* @flow */
import React from 'react';
import {parseStyleAndSpacingProps} from 'utils/style';
import {cx} from 'emotion';

import {Box as GridBox, Flex as GridFlex} from 'grid-emotion';

function extendPrimitive(DefaultComponent, display, defaultStyle) {
  return (initialProps: any) => {
    const {
      component: Component = DefaultComponent,
      elRef,
      style: propStyle,
      className,
      ...otherProps
    } = initialProps;

    const {props, spacingProps, style} = parseStyleAndSpacingProps({
      ...defaultStyle,
      ...otherProps,
    });

    return (
      <Component
        ref={elRef}
        className={cx(className)}
        css={{...style, ...propStyle}}
        {...spacingProps}
        {...props}
      />
    );
  };
}

export const Box = extendPrimitive(GridBox, 'flex', {
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 0,
  alignContent: 'flex-start',
});
Box.displayName = 'Box';

export const Flex = extendPrimitive(GridFlex, 'flex', {
  flexDirection: 'row',
});
Flex.displayName = 'Flex';

export const Block = extendPrimitive('div', 'block');
Block.displayName = 'Block';

export const Inline = extendPrimitive('span', 'inline-block', {
  verticalAlign: 'bottom',
});
Inline.displayName = 'Inline';

export const InlineFlex = extendPrimitive('span', 'inline-flex');
InlineFlex.displayName = 'InlineFlex';

/**
 * @todo: All of the html primitives should follow here so our api is consistent to the very root...
 * - Eg. Button, Input, Select, Table etc.
 */
export const A = extendPrimitive('a', 'inline-block');
A.displayName = 'A';
