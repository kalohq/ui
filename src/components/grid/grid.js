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

type TRowProps = {
  children?: any,
  gutter?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
  collapse?: boolean,
  spacing?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large',
};

export function Row(props: TRowProps) {
  const {
    children,
    spacing = 'medium',
    gutter = false,
    collapse = false,
    ...otherProps
  } = props;

  return (
    <Flex
      width="100%"
      flexWrap="wrap"
      paddingLeft={gutter}
      paddingRight={gutter}
      {...otherProps}
    >
      {React.Children.map(
        children,
        child =>
          child
            ? React.cloneElement(child, {
                paddingLeft: !collapse ? spacing : null,
                paddingRight: !collapse ? spacing : null,
              })
            : null
      )}
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
