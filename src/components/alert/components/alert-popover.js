/* @flow */
import React from 'react';
import {Box} from '../../layout';

type TProps = {
  children: React$Element<*>,
  topOffset?: number,
};

export default function AlertPopover(props: TProps) {
  const {children, topOffset = 0} = props;

  return (
    <Box position="fixed" right={32} top={topOffset + 16} maxWidth={400}>
      {React.Children.map(children, child =>
        <Box marginBottom={8}>
          {React.cloneElement(child, {justifyContent: 'left'})}
        </Box>
      )}
    </Box>
  );
}
