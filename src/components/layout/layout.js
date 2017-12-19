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

      const cleanedProps = cleanProps(props);

      return (
        <Component
          ref={elRef}
          className={cx(className)}
          css={{...style}}
          {...cleanedProps}
          style={{...propStyle}}
        />
      );
    }
  }

  Primitive.displayName = name;
  return Primitive;
}

class BaseComponent extends PureComponent {
  render() {
    const {
      component: Component = 'div',
      elRef,
      style: propStyle,
      className,
      ...otherProps
    } = this.props;

    const cleanedProps = cleanProps(otherProps);

    return (
      <Component
        ref={elRef}
        className={className ? cx(className) : null}
        {...cleanedProps}
        style={{...propStyle}}
      />
    );
  }
}

class SpanBaseComponent extends PureComponent {
  render() {
    const {
      component: Component = 'span',
      elRef,
      style: propStyle,
      className,
      ...otherProps
    } = this.props;

    const cleanedProps = cleanProps(otherProps);

    return (
      <Component
        ref={elRef}
        className={className ? cx(className) : null}
        {...cleanedProps}
        style={{...propStyle}}
      />
    );
  }
}

class ABaseComponent extends PureComponent {
  render() {
    const {
      component: Component = 'a',
      elRef,
      style: propStyle,
      className,
      ...otherProps
    } = this.props;

    const cleanedProps = cleanProps(otherProps);

    return (
      <Component
        ref={elRef}
        className={className ? cx(className) : null}
        {...cleanedProps}
        style={{...propStyle}}
      />
    );
  }
}
/** 
 * Layout primitives
 */

export const Box = styled(BaseComponent)`
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

export const Flex = styled(BaseComponent)`
  display: flex;
  ${spacing};
  ${filterStyleProps};
`;
Flex.displayName = 'Flex';

export const Block = styled(BaseComponent)`
  display: block;
  ${spacing};
  ${filterStyleProps};
`;
Block.displayName = 'Block';

export const Inline = styled(BaseComponent)`
  display: inline-block;
  vertical-align: bottom;
  ${spacing};
  ${filterStyleProps};
`;
Inline.displayName = 'Inline';

export const InlineFlex = styled(SpanBaseComponent)`
  display: inline-flex;
  ${spacing};
  ${filterStyleProps};
`;
InlineFlex.displayName = 'InlineFlex';

/**
 * All of our html primitives should follow here so our api is consistent to the very root
 * Eg. Button, Input, Select, Table etc.
 */

export const A = styled(ABaseComponent)`
  display: inline-flex;
  ${spacing};
  ${filterStyleProps};
`;
A.displayName = 'A';
