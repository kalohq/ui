/* @flow */
import React from 'react';
import {toNumber} from 'lodash';

import {Box, Flex} from '../layout';

const GRID_MAX_WIDTH = 1200;

/**
 * Some low level grid components
 */
type TGridProps = {
  children?: any,
};

export function Grid(props: TGridProps) {
  const {children, ...otherProps} = props;

  return (
    <Flex
      width="100%"
      flexDirection="column"
      maxWidth={GRID_MAX_WIDTH}
      margin="0 auto"
      {...otherProps}
    >
      {children}
    </Flex>
  );
}

type TRowProps = {
  children?: any,
  gutter?: string,
  spacing?: 'small' | 'medium' | 'large' | 'extra-large',
};

export function Row(props: TRowProps) {
  const {children, spacing = 'small', gutter = null, ...otherProps} = props;
  return (
    <Flex width="100%" marginLeft={gutter} marginRight={gutter} {...otherProps}>
      {React.Children.map(
        children,
        child =>
          child
            ? React.cloneElement(child, {
                paddingLeft: spacing,
                paddingRight: spacing,
              })
            : null
      )}
    </Flex>
  );
}

type TColumnProps = {
  component?: React$Element<*> | string,
  columns?: number,
  children?: any,
  spacing?: 'small',
};

export function Column(props: TColumnProps) {
  const {component, columns = 12, children, ...otherProps} = props;

  const _width = `${100 / 12 * toNumber(columns)}%`;

  return (
    <Box
      flexDirection="row"
      component={component}
      width={_width}
      {...otherProps}
    >
      {children}
    </Box>
  );
}
