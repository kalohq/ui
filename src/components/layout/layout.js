/* @flow */
import React from 'react';
import {parseStyleProps, cleanProps} from '../../utils/style';
import PureComponent from 'react-pure-render/component';
import {cx} from 'react-emotion';

const makePrimitive = ({
  displayName,
  defaultComponent,
  defaultStyle,
  enableSpacing = false,
}) => {
  class Primitive extends PureComponent {
    render() {
      const {
        element,
        component,
        elRef,
        style: propStyle,
        className,
        ...otherProps
      } = this.props;

      const {props, style} = parseStyleProps({...otherProps}, enableSpacing);

      const Component = element
        ? element
        : component ? component : defaultComponent;

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

  Primitive.displayName = displayName;
  return Primitive;
};

/** 
 * Layout primitives
 */

export const Box = makePrimitive({
  displayName: 'Box',
  enableSpacing: true,
  defaultComponent: 'div',
  defaultStyle: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexShrink: 0,
    alignContent: 'flex-start',
    display: 'flex',
  },
});

export const Flex = makePrimitive({
  displayName: 'Flex',
  enableSpacing: true,
  defaultComponent: 'div',
  defaultStyle: {
    display: 'flex',
  },
});

export const Block = makePrimitive({
  displayName: 'Block',
  enableSpacing: true,
  defaultComponent: 'div',
  defaultStyle: {
    display: 'block',
  },
});

export const Inline = makePrimitive({
  displayName: 'Inline',
  enableSpacing: true,
  defaultComponent: 'span',
  defaultStyle: {
    display: 'inline-block',
    verticalAlign: 'bottom',
  },
});

export const InlineFlex = makePrimitive({
  displayName: 'InlineFlex',
  enableSpacing: true,
  defaultComponent: 'span',
  defaultStyle: {
    display: 'inline-flex',
  },
});

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */

export const A = makePrimitive({
  displayName: 'A',
  enableSpacing: false,
  defaultComponent: 'a',
  defaultStyle: {
    display: 'inline-flex',
  },
});

export const Base = makePrimitive({
  displayName: 'Base',
  enableSpacing: false,
  defaultComponent: 'div',
  defaultStyle: {
    display: 'flex',
  },
});
