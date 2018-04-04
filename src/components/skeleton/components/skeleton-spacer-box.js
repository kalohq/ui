/* @flow */
import * as React from 'react';
import {pure} from 'recompose';

import {Box} from '../../layout';

type TProps = {
  spacing?: number,
  vertical?: boolean,
  center?: boolean,
  childFlex?: string,
  children?: React.Node | string,
};

function SpacerBox(props: TProps) {
  const {
    spacing = 25,
    vertical,
    center = true,
    childFlex,
    children,
    ...otherProps
  } = props;

  const alignItems = center ? 'center' : 'stretch';
  const style = vertical
    ? {alignItems, marginTop: -spacing}
    : {flexDirection: 'row', alignItems, marginLeft: -spacing};

  return (
    <Box {...style} {...otherProps}>
      {React.Children.map(children, child => (
        <Box
          marginTop={vertical ? spacing : 0}
          marginLeft={!vertical ? spacing : 0}
          flex={childFlex}
          width="100%"
        >
          {child}
        </Box>
      ))}
    </Box>
  );
}

export default pure(SpacerBox);
