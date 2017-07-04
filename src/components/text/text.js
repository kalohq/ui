/* @flow */
import React from 'react';
import cx from 'classnames';
import {Inline} from '../layout';
import {pickStyles} from 'utils/style';
import {isString} from 'lodash';

import styles from './text.css';

import type {
  TEXT_WEIGHT,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_HOVER_COLOR,
  TEXT_MARGIN,
  TEXT_ALIGN,
} from './constants';

import {
  DEFAULT_HOVER_COLOR,
  DEFAULT_COLOR,
  DEFAULT_WEIGHT,
  DEFAULT_SIZE,
  DEFAULT_MARGIN,
  DEFAULT_ALIGN,
} from './constants';

type textProps = {
  weight?: TEXT_WEIGHT,
  size?: TEXT_SIZE,
  color?: TEXT_COLOR,
  hoverColor?: TEXT_HOVER_COLOR,
  margin?: TEXT_MARGIN,
  align?: TEXT_ALIGN,
  domElement?: Function | string,
  component?: Function | string,
  multiline?: boolean,
  children: React.Element<*>,
  className?: string,
  onClick?: Function,
  interactive?: boolean,
  noUnderline?: boolean,
  resetTransform?: boolean,
  dangerouslySetInnerHTML?: Object,
  target?: string,
  href?: string,
};

export default function Text(props: textProps) {
  const {
    children,
    className,
    onClick,
    weight = DEFAULT_WEIGHT,
    size = DEFAULT_SIZE,
    color = DEFAULT_COLOR,
    hoverColor = DEFAULT_HOVER_COLOR,
    margin = DEFAULT_MARGIN,
    domElement = 'span',
    component = Inline,
    multiline = false,
    resetTransform = false,
    align = DEFAULT_ALIGN,
    noUnderline = false,
    interactive = false,
    dangerouslySetInnerHTML,
    target,
    href,
    ...otherProps
  } = props;

  const Component = isString(component) ? Inline : component;

  const childrenProp =
    children === undefined ? {dangerouslySetInnerHTML} : {children};

  return (
    <Component
      component={domElement}
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
      target={target}
      href={href}
      {...childrenProp}
      {...pickStyles(otherProps)}
    />
  );
}
