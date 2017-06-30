/* @flow */
import React from 'react';

import Button from '../button';
import Icon from '../icon';

export function PrimaryActionButton(props: {icon?: string}) {
  const {icon = 'add', ...otherProps} = props;

  return (
    <Button
      size="medium"
      theme="primary"
      loneIcon={true}
      name="Primary action button"
      {...otherProps}
    >
      <Icon size={24}>
        {icon}
      </Icon>
    </Button>
  );
}

export default PrimaryActionButton;
