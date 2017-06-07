// @flow
import React from 'react';
import cx from 'classnames';
import {Inline} from '../layout';

import styles from './custom-icon.css';

import type {CUSTOM_ICONS, CUSTOM_ICON_SIZES} from './constants';
/**
 * CustomIcon
 *
 * A component for displaying our custom icons.
 *
 * Note: There is a pattern for updating and creating new svg
 * files to ensure they are correctly positioned. See this
 * sketch file: https://drive.google.com/open?id=0B_uaTXi0frXuT2dSZEZGb2tiU1E
 *
 */

type customIconProps = {
  children: CUSTOM_ICONS,
  size: CUSTOM_ICON_SIZES,
  className: string,
};

export default function CustomIcon(props: customIconProps) {
  const {size = 24, children = false, className = '', ...otherProps} = props;

  return (
    <Inline
      component="i"
      verticalAlign="middle"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={cx(
        {
          [styles.root]: true,
          [styles[`icon-${String(children)}`]]: true,
        },
        className
      )}
      {...otherProps}
    />
  );
}
