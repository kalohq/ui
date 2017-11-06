/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {parseStyleProps} from 'utils/style';

import {Box} from '../layout';

import styles from './paper.css';

type Props = {
  focused?: boolean,
  rounded?: boolean,
  padded?: boolean,
  border?: boolean,
  children: React.Node,
  elevation?: number,
  hoverElevation?: number,
  className?: string | Object,
  component?: React.Node | string,
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
    focused,
    padded,
    border = true,
    children,
    elevation = 1,
    hoverElevation = 1,
    className,
    component = Box,
    rounded = true,
    opaque,
    wireframe,
    onClick,
    ...otherProps
  } = props;

  const styleProps = parseStyleProps(otherProps);

  const Component = component;
  const zDepth = Math.min(elevation, 5);
  const hoverZDept = Math.min(hoverElevation, 5);

  const _classNames = cx(
    {
      [styles.root]: true,
      [styles.focused]: focused,
      [styles[`level-${zDepth}`]]: true,
      [styles[`hover-level-${hoverZDept}`]]: true,
      [styles.border]: border,
      [styles.rounded]: rounded,
      [styles.padded]: padded,
      [styles.opaque]: opaque,
      [styles.wireframe]: wireframe,
      [styles.interactive]: !!onClick,
    },
    className
  );

  return (
    <Component className={_classNames} {...styleProps.style} onClick={onClick}>
      {children}
    </Component>
  );
}
