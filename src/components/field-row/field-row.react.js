/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {pickStyles} from '../../utils/style';

import {UIBase} from '../layout';

import styles from './field-row.module.css';

export const DEFAULT_SPACING = 20;

/**
 * Render fields (children) in a row
 */

type TProps = {
  /** A set of one or more fields */
  children?: React.Element<*>,
  /** Pixel value of spacing between field elements */
  gutter?: number,
  /** A class to pass down */
  className?: string,
};

export default function FieldRow(props: TProps) {
  const {children, gutter = DEFAULT_SPACING, className, ...otherProps} = props;

  const _classNames = cx(
    {
      [styles['ui-field-row']]: true,
    },
    className
  );

  return (
    <UIBase
      className={_classNames}
      marginLeft={-gutter}
      marginTop={DEFAULT_SPACING}
      {...pickStyles(otherProps)}
    >
      {React.Children.map(children, child =>
        child
          ? React.cloneElement(child, {
              flex: child.props.flex || 1,
              marginLeft: 0,
              paddingLeft: gutter,
            })
          : child
      )}
    </UIBase>
  );
}
