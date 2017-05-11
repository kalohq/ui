import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'react-pure-render/component';
import cx from 'classnames';
import {Inline} from 'components/layout';
import {isString} from 'lodash';

import styles from './text.css';

export default class Text extends PureComponent {
  static propTypes = {
    weight: PropTypes.oneOf(['normal', 'semi-bold']),
    size: PropTypes.oneOf([
      'tiny',
      'extra-small',
      'small',
      'medium',
      'large',
      'extra-large',
    ]),
    color: PropTypes.oneOf([
      'red',
      'blue',
      'dark-blue',
      'dark-grey',
      'grey',
      'light-grey',
      'white',
      'green',
      'orange',
      'white',
      'navy',
      'none',
    ]),
    hoverColor: PropTypes.oneOf([
      'red',
      'blue',
      'dark-blue',
      'dark-grey',
      'grey',
      'light-grey',
      'white',
      'green',
      'orange',
      'white',
      'navy',
      'none',
    ]),
    margin: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
    align: PropTypes.oneOf(['center', 'left', 'right', 'none']),
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    multiline: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    interactive: PropTypes.bool,
    noUnderline: PropTypes.bool,
    resetTransform: PropTypes.bool,
  };

  static defaultProps = {
    hoverColor: 'none',
    color: 'grey',
    weight: 'normal',
    size: 'small',
    margin: 'none',
    component: Inline,
    multiline: false,
    resetTransform: false,
    align: 'none',
    noUnderline: false,
  };

  render() {
    const {
      weight,
      size,
      margin,
      color,
      children,
      multiline,
      component,
      className,
      hoverColor,
      align,
      onClick,
      interactive,
      noUnderline,
      resetTransform,
      ...otherProps
    } = this.props;

    const Component = isString(component) ? Inline : component;

    return (
      <Component
        component={component}
        onClick={onClick}
        className={cx(
          {
            [styles.root]: true,
            [styles[`weight-${weight}`]]: true,
            [styles[`size-${size}`]]: true,
            [styles[`color-${color}`]]: true,
            [styles[`hover-color-${hoverColor}`]]: true,
            [styles[`margin-${margin}`]]: true,
            [styles[`align-${align}`]]: align !== 'none',
            [styles.resetTransform]: resetTransform,
            [styles.multiline]: multiline,
            [styles.interactive]: !!onClick || interactive === true,
            [styles['not-interactive']]: interactive === false,
            [styles['no-underline']]: noUnderline,
          },
          className
        )}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
}
