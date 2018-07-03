/* @flow */
import React from 'react';
import cx from 'classnames';
import {parseStyleProps, cleanProps} from '../../utils/style';

import styles from './grid.css';

/**
 * Grid Container
 */

type TGridProps = {
  children?: any,
  fluid?: boolean,
};

export function Grid(props: TGridProps) {
  const {children, fluid, ...otherProps} = props;

  const _classNames = cx({
    [styles.container]: true,
    [styles.fluid]: fluid,
  });

  return (
    <Spacer className={_classNames} {...otherProps}>
      {children}
    </Spacer>
  );
}

/**
 * Generic Spacer
 */

type TSpacerProps = {
  is?: string,
  children?: any,
  className?: string | Object,
};

const Spacer = (originalProps: TSpacerProps) => {
  const {
    is: Element = 'div',
    children,
    className,
    ...otherProps
  } = originalProps;

  const {props, style} = parseStyleProps({
    ...otherProps,
  });

  const cleanedProps = cleanProps(props);

  return (
    <Element className={className} {...cleanedProps} css={style}>
      {children}
    </Element>
  );
};

/**
 * Row
 */

type TRowProps = {
  children?: any,
  gutters?:
    | 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'
    | 'none',
  collapse?: boolean,
  reverse?: boolean,
};

export function Row(props: TRowProps) {
  const {children, reverse, ...otherProps} = props;

  const _classNames = cx({
    [styles.row]: true,
    [styles.reverse]: reverse,
  });

  return (
    <Spacer className={_classNames} {...otherProps}>
      {children}
    </Spacer>
  );
}

/**
 * Column
 */

type TColumnProps = {
  columns?: number,
  children?: any,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  reverse?: boolean,
  largeColumn?: number,
};

export function Column(props: TColumnProps) {
  const {columns, xs, sm, md, lg, reverse, children, ...otherProps} = props;

  /* Backwards compat to support legacy columns props */
  const xsColumn = columns && !xs && !sm && !md && !lg ? columns : xs ? xs : 12;

  const _classNames = cx({
    [styles[`col-xs-${String(xsColumn)}`]]: xsColumn,
    [styles[`col-sm-${String(sm)}`]]: sm,
    [styles[`col-md-${String(md)}`]]: md,
    [styles[`col-lg-${String(lg)}`]]: lg,
    [styles.reverse]: reverse,
  });

  return (
    <Spacer className={_classNames} {...otherProps}>
      {children}
    </Spacer>
  );
}
