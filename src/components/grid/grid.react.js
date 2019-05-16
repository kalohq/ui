import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {parseStyleProps, cleanProps} from '../../utils/style';

import styles from './grid.css';

/**
 * Grid Container
 */

export function Grid(props) {
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

Grid.propTypes = {
  children: PropTypes.any,
  fluid: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

/**
 * Generic Spacer
 */

const Spacer = originalProps => {
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
    <Element className={className} {...cleanedProps} style={style}>
      {children}
    </Element>
  );
};

Spacer.propTypes = {
  is: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

/**
 * Row
 */

export function Row(props) {
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

Row.propTypes = {
  children: PropTypes.any,
  gutters: PropTypes.oneOf([
    'extra-small',
    'small',
    'medium',
    'large',
    'extra-large',
    'none',
  ]),
  collapse: PropTypes.bool,
  reverse: PropTypes.bool,
  alignItems: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  justifyContent: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

/**
 * Column
 */

export function Column(props) {
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

Column.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  children: PropTypes.any,
  largeColumn: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
