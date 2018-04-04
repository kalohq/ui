/* @flow */
import * as React from 'react';

import {Box} from '../../layout';

type TProps = {
  spacing?: number,
  vertical?: boolean,
  center?: boolean,
  childFlex?: string,
  children?: React.Element<*>,
};

export default function SpacerBox(props: TProps) {
  const {
    spacing = 25,
    vertical,
    center = true,
    childFlex,
    children,
    ...otherProps
  } = props;

  return (
    <Box
      alignItems={center ? 'center' : 'stretch'}
      marginTop={vertical ? -spacing : null}
      flexDirection={vertical ? 'column' : 'row'}
      marginLeft={vertical ? null : -spacing}
      {...otherProps}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          marginTop: vertical ? spacing : 0,
          marginLeft: !vertical ? spacing : 0,
          flex: childFlex,
        })
      )}
    </Box>
  );
}
