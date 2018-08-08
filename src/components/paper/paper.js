/* @flow */
import * as React from 'react';
import cx from 'classnames';

import coreStyles from './paper.core.css';

type Props = {
  focused?: boolean,
  rounded?: boolean,
  padded?: boolean,
  border?: boolean,
  children: React.Node,
  elevation?: number,
  hoverElevation?: number,
  className?: string | Object,
  opaque?: boolean,
  wireframe?: boolean,
  onClick?: Function,
};

/**
 * @summary This is the kalo paper component.
 * It is in charge of implementing the box-shadow around
 * our cards and the focus/blur animations.
 *
 */
export default function Paper(props: Props) {
  const {
    border = true,
    children,
    elevation = 1,
    hoverElevation = 1,
    opaque,
    wireframe,
    onClick,
    component: Component = 'div',
    className,
    ...otherProps
  } = props;

  const zDepth = Math.min(elevation, 5);
  const hoverZDepth = Math.min(hoverElevation, 5);

  const _classNames = cx(
    {
      [coreStyles['ui-paper']]: true,
      [coreStyles[`ui-paper--level-${zDepth}`]]: true,
      [coreStyles[`ui-paper--hover-level-${hoverZDepth}`]]: true,
      [coreStyles['ui-paper--opaque']]: opaque,
      [coreStyles['ui-paper--wireframe']]: wireframe,
      [coreStyles['ui-paper--no-border']]: !border,
      [coreStyles['ui-paper--interactive']]: !!onClick,
    },
    className
  );

  return (
    <Component
      interactive={!!onClick}
      onClick={onClick}
      className={_classNames}
      {...otherProps}
    >
      {children}
    </Component>
  );
}
