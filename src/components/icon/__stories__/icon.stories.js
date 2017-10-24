/* @flow */
import React from 'react';
import {storiesOf} from '@storybook/react';

import Icon from '../icon';

import {ICONS} from '../constants';
import COLORS from 'constants/color';

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
          <Icon key={icon} color={COLORS.ORANGE} size={36}>
            {icon}
          </Icon>
        ))}
        <Icon>test</Icon>
      </span>
    );
  }
);
