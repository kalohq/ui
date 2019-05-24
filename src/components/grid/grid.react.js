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
  className?: string | Object,
};

export function Grid(props: TGridProps) {
  const {children, fluid, className, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles.container]: true,
      [styles.fluid]: fluid,
    },
    className
  );

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
  alignItems?: Array<*> | string,
  justifyContent?: Array<*> | string,
  className?: string | Object,
};

export function Row(props: TRowProps) {
  const {
    children,
    reverse,
    alignItems = [],
    justifyContent = [],
    className,
    ...otherProps
  } = props;

  const [
    alignItemsXS,
    alignItemsSM,
    alignItemsMD,
    alignItemsLG,
  ] = (Array.isArray(alignItems) ? alignItems : [alignItems]).map(val =>
    val.replace('flex-', '')
  );

  const [
    justifyContentXS,
    justifyContentSM,
    justifyContentMD,
    justifyContentLG,
  ] = (Array.isArray(justifyContent) ? justifyContent : [justifyContent]).map(
    val => val.replace('flex-', '').replace('space-', '')
  );

  const _classNames = cx(
    {
      [styles.row]: true,
      [styles.reverse]: reverse,
      [styles[`align-xs-${alignItemsXS}`]]: alignItemsXS,
      [styles[`align-sm-${alignItemsSM}`]]: alignItemsSM,
      [styles[`align-md-${alignItemsMD}`]]: alignItemsMD,
      [styles[`align-lg-${alignItemsLG}`]]: alignItemsLG,
      [styles[`justify-xs-${justifyContentXS}`]]: justifyContentXS,
      [styles[`justify-sm-${justifyContentSM}`]]: justifyContentSM,
      [styles[`justify-md-${justifyContentMD}`]]: justifyContentMD,
      [styles[`justify-lg-${justifyContentLG}`]]: justifyContentLG,
    },
    className
  );

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
  columns?: Array<*> | number,
  children?: any,
  largeColumn?: number,
  className?: string | Object,
};

export function Column(props: TColumnProps) {
  const {columns = [12], children, className, ...otherProps} = props;

  const [columnXS, columnSM, columnMD, columnLG, columnXL] = Array.isArray(
    columns
  )
    ? columns
    : [columns];

  const _classNames = cx(
    {
      [styles[`col-xs-${String(columnXS)}`]]: columnXS,
      [styles[`col-sm-${String(columnSM)}`]]: columnSM,
      [styles[`col-md-${String(columnMD)}`]]: columnMD,
      [styles[`col-lg-${String(columnLG)}`]]: columnLG,
      [styles[`col-xl-${String(columnXL)}`]]: columnXL,
    },
    className
  );

  return (
    <Spacer className={_classNames} {...otherProps}>
      {children}
    </Spacer>
  );
}
