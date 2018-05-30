/* @flow */
import React from 'react';
import styled from 'react-emotion';
import {toNumber} from 'lodash';

import {Box, Flex} from '../layout';

/**
 * Some low level grid components
 */
export const Grid = styled(Flex)`
  width: 100%;
  flex-direction: column;
  max-width: ${props => props.theme.grid.gridMaxWidth}px;
  margin-left: auto;
  margin-right: auto;
`;

Grid.displayName = 'Grid';

type TRowProps = {
  children?: any,
  gutters?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
  collapse?: boolean,
};

export function Row(props: TRowProps) {
  const {children, gutters = 'medium', collapse = false, ...otherProps} = props;

  return (
    <Flex width="100%" flexWrap="wrap" {...otherProps}>
      {React.Children.map(children, (child, i) => {
        const isLast = React.Children.count(children) === i + 1;
        const isFirst = i === 0;

        return child
          ? React.cloneElement(child, {
              paddingLeft: collapse || isFirst ? null : gutters,
              paddingRight: collapse || isLast ? null : gutters,
            })
          : null;
      })}
    </Flex>
  );
}

type TColumnProps = {
  columns?: number,
  children?: any,
  spacing?: 'small',
};

export function Column(props: TColumnProps) {
  const {columns = 12, children, ...otherProps} = props;

  const _width = `${100 / 12 * toNumber(columns)}%`;

  return (
    <Box flexDirection="column" width={_width} {...otherProps}>
      {children}
    </Box>
  );
}
