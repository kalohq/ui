import React, {PureComponent} from 'react';
import {parseStyleProps, cleanProps} from '../../utils/style';
import cx from 'classnames';

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

      return (
        <Component
          ref={elRef}
          className={cx(klassName, className)}
          {...cleanedProps}
          style={{...style, ...propStyle}}
        />
      );
    }
  }

  Primitive.displayName = `Primitive${name}`;
  return Primitive;
};
