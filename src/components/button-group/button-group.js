/* @flow */
import * as React from 'react';
import cx from 'classnames';
import {isArray} from 'lodash';
import {UIBase} from '../layout';

import coreStyles from './button-group.core.css';

/**
 * A basic container for grouped buttons
 * - Clones children to ensure Button components received a 'grouped' prop
 */

type Props = {
  /** One or more Buttons */
  children: Iterable<React.Element<*>>,
  flex?: boolean,
  /** Should this span the full width of the parent? */
  wide?: boolean,
  /** Should there be spacing between the child buttons? */
  spacing?: boolean,
  /** Reverses the order of child buttons */
  reverse?: boolean,
  /** X Alignment of the buttons */
  align?: 'left' | 'center' | 'right',
};

export default function ButtonGroup(props: Props) {
  const {
    children,
    wide = true,
    flex,
    spacing,
    reverse,
    align,
    ...otherProps
  } = props;

  const childrenInOrder =
    reverse && isArray(children) ? [...children].reverse() : children;

  const _classNames = cx({
    [coreStyles['ui-btn-group']]: true,
    [coreStyles['ui-btn-group--wide']]: wide,
    [coreStyles[`ui-btn-group--align-${String(align)}`]]: align,
  });

  return (
    <UIBase className={_classNames} data-test="ui-button-group" {...otherProps}>
      {childrenInOrder &&
        React.Children.map(
          childrenInOrder,
          child =>
            child && // $FlowFixMe
            React.cloneElement(child, {
              grouped: !spacing,
              spacing: !!spacing,
              reverse,
              flex,
            })
        )}
    </UIBase>
  );
}
