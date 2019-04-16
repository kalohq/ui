import React, {PureComponent} from 'react';
import {parseStyleProps, cleanProps} from '../../utils/style';
import cx from 'classnames';

export const makePrimitive = (name, DefaultComponent, defaultStyle) => {
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
