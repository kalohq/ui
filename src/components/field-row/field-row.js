/* @flow */
import * as React from 'react';
import {pickStyles} from '../../utils/style';

import {Box} from '../layout';

const DEFAULT_SPACING = 20;

/**
 * Render fields (children) in a row
 */

type TProps = {
  /** A set of one or more fields */
  children?: React.Node,
  /** Pixel value of spacing between field elements */
  gutter?: number,
  /** A class to pass down */
  className?: string,
};

export default function FieldRow(props: TProps) {
  const {children, gutter = DEFAULT_SPACING, className, ...otherProps} = props;

  return (
    <Box
      className={className}
      flexDirection="row"
      alignItems="top"
      marginLeft={-gutter}
      marginTop={DEFAULT_SPACING}
      {...pickStyles(otherProps)}
    >
      {React.Children.map(
        children,
        c =>
          c
            ? React.cloneElement(c, {
                flex: c.props.flex || 1,
                marginLeft: 0,
                paddingLeft: gutter,
              })
            : c
      )}
    </Box>
  );
}
