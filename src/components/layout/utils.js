import React, {PureComponent} from 'react';
import {parseStyleProps, cleanProps} from '../../utils/style';
import cx from 'classnames';
import {prefix} from 'inline-style-prefixer';

// inline-style-prefixer returns an Array for props
// that need a prefixer at value level (i.e. display: 'inline-flex')
// this function is prevent that the prop is not handled by react
// it returns the default value instead
// this is a temporary hack, we need to move away from propStyles
const propArrayFallback = inlineStyle => ({
  ...Object.keys(inlineStyle).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: Array.isArray(inlineStyle[prop])
        ? inlineStyle[prop].slice(-1)[0]
        : inlineStyle[prop],
    }),
    {}
  ),
});

export const makePrimitive = (name, DefaultComponent, klassName) => {
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
      const inlineStyle = prefix({...style, ...propStyle});

      return (
        <Component
          ref={elRef}
          className={cx(klassName, className)}
          {...cleanedProps}
          style={inlineStyle && propArrayFallback(inlineStyle)}
        />
      );
    }
  }

  Primitive.displayName = `Primitive${name}`;
  return Primitive;
};
