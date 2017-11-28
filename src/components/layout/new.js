/* @flow */
import React from 'react';
import {parseStyleAndSpacingProps} from 'utils/style';
import {cx} from 'emotion';

import {Box as GridBox, Flex as GridFlex} from 'grid-emotion';

function extendPrimitive(name, DefaultComponent, display, defaultStyle) {
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

export const Box = extendPrimitive('Box', GridBox, 'flex', {
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 0,
  alignContent: 'flex-start',
  display: 'flex',
});

export const Flex = extendPrimitive('Flex', GridFlex, 'flex', {
  flexDirection: 'row',
  display: 'flex',
});

export const Block = extendPrimitive('Block', 'div', 'block');
export const Inline = extendPrimitive('Inline', 'span', 'inline-block', {
  verticalAlign: 'bottom',
});
