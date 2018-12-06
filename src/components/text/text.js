/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {UIBase} from '../layout';

import styles from './text.css';
import colors from '../../design-tokens/kalo-ui-colors.css';
import hoverColors from '../../design-tokens/kalo-ui-hover-colors.css';

import type {
  TEXT_WEIGHT,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_HOVER_COLOR,
  TEXT_ALIGN,
} from './constants';

type TProps = {
  weight?: TEXT_WEIGHT,
  size?: TEXT_SIZE,
  color?: TEXT_COLOR,
  hoverColor?: TEXT_HOVER_COLOR,
  align?: TEXT_ALIGN,
  domElement?: Function | string,
  component?: Function | string,
  multiline?: boolean,
  children?: React.Node,
  className?: string,
  onClick?: Function,
  interactive?: boolean,
  notInteractive?: boolean,
  noUnderline?: boolean,
  resetTransform?: boolean,
  dangerouslySetInnerHTML?: Object,
  target?: string,
  href?: string,
  name?: string,
  theme?: Object,
};

export default function Text(props: TProps) {
  const {
    weight = 'normal',
    size = 'small',
    align = 'unset',
    color = 'navy800',
    hoverColor = 'none',
    multiline,
    interactive,
    noUnderline,
    onClick,
    className,
    children,
    component = 'span',
    ...otherProps
  } = props;

  const _classNames = cx(
    {
      [styles['ui-text']]: true,
      [styles[`ui-text--size-${size}`]]: true,
      [styles[`ui-text--weight-${weight}`]]: true,
      [styles[`ui-text--align-${align}`]]: true,
      [styles['ui-text--multiline']]: Boolean(multiline),
      [styles['ui-text--no-underline']]: Boolean(noUnderline),
      [styles['ui-text--interactive']]: Boolean(interactive || onClick),
      [colors[`color-${color}`]]: true,
      [hoverColors[`hover-color-${hoverColor}`]]: Boolean(hoverColor),
    },
    className
  );

  return (
    <UIBase
      component={component}
      onClick={onClick}
      className={_classNames}
      {...otherProps}
    >
      {children}
    </UIBase>
  );
}
