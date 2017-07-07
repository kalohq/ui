/* @flow */
import React from 'react';
import cx from 'classnames';
import {Box} from '../layout';

import type {PAPER_ELEVATION} from './constants';
import styles from './paper.css';

const PADDING = 25;

/** A basic toolbar container to display at the top of paper  */
export function PaperToolbar(props: {children: React.Element<*>}) {
  const {children} = props;

  return (
    <Box className={styles.toolbar} padding={[0, PADDING]}>
      {children}
    </Box>
  );
}

type paperProps = {
  focused?: boolean,
  rounded?: boolean,
  padded?: boolean,
  border?: boolean,
  children?: React.Element<*>,
  elevation: PAPER_ELEVATION,
  hoverElevation?: PAPER_ELEVATION,
  className?: string,
  component?: Function | string,
  opaque?: boolean,
  wireframe?: boolean,
  onClick?: Function,
};

export default function Paper(props: paperProps) {
  const {
    focused,
    rounded = true,
    padded,
    border,
    children,
    elevation = 1,
    hoverElevation = 1,
    className,
    component = Box,
    opaque,
    wireframe,
    onClick,
    ...otherProps
  } = props;

  const Component = component;
  const zDepth = Math.min(elevation, 5);
  const hoverZDept = Math.min(hoverElevation, 5);

  return (
    <Component
      className={cx(
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
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </Component>
  );
}
