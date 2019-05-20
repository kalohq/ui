import React, {PureComponent} from 'react';
import {parseStyleProps, cleanProps} from '../../utils/style';
import cx from 'classnames';
import {prefix} from 'inline-style-prefixer';

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
          style={inlineStyle}
        />
      );
    }
  }

  Primitive.displayName = `Primitive${name}`;
  return Primitive;
};
