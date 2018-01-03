/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';

import Icon from '../icon';

import {ICONS} from '../constants';

storiesOf(
  'Icon',
  module
).addWithInfo(
  'Icon',
  'Renders an icon from the Google Material Design icon set. See material.io for a list of icons',
  () => {
    return (
      <span>
        {ICONS.values.map(icon => (
          <Icon key={icon} color="blue400" size={36}>
            {icon}
          </Icon>
        ))}
      </span>
    );
  }
);
