/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';

import Icon from '../icon';

storiesOf(
  'Icon',
  module
).addWithInfo(
  'Material Icons',
  'Renders an icon from the Google Material Design icon set.',
  () => {
    return (
      <span>
        <Icon size={36}>https</Icon>
        <Icon size={36} color="red" />
        <Icon size={36} color="orange">warning</Icon>
      </span>
    );
  }
);
