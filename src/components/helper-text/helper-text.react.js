/* @flow */
import React from 'react';

import Text from '../text';

type TProps = {
  children: any,
};

export default function HelperText(props: TProps) {
  const {children, ...otherProps} = props;

  return (
    <Text size="extra-small" weight="normal" color="grey500" {...otherProps}>
      {children}
    </Text>
  );
}
