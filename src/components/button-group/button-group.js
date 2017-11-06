/* @flow */
import * as React from 'react';
import cx from 'classnames';

import {Flex} from '../layout';

import styles from './button-group.css';

/**
 * A basic container for grouped buttons
 * - Clones children to ensure Button components received a 'grouped' prop
 */

type Props = {
  children: React$Element<*>,
  flex?: boolean,
  bordered?: boolean,
  wide?: boolean,
  spacing?: boolean,
  reverse?: boolean,
};

export default function ButtonGroup(props: Props) {
  const {
    children,
    wide = true,
    bordered,
    flex,
    spacing,
    reverse,
    ...otherProps
  } = props;

  return (
    <Flex
      alignItems="center"
      className={cx({
        [styles.wide]: wide,
        [styles.bordered]: bordered,
        [styles.reverse]: reverse,
      })}
      {...otherProps}
    >
      {children ? (
        React.Children.map(
          children,
          child =>
            child
              ? React.cloneElement(child, {
                  grouped: !spacing,
                  spacing: !!spacing,
                  reverse,
                  flex,
                })
              : null
        )
      ) : null}
    </Flex>
  );
}
