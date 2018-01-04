/* @flow */
import React from 'react';
import styled from 'react-emotion';
import {storiesOf} from '@storybook/react';

import Icon from 'components/icon';
import Text from 'components/text';

import {ICONS} from '../constants';

const GridContainer = styled('div')`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(5, 20%);
  background-color: ${props => props.theme.colors.grey300};
`;

const IconBlock = styled('div')`
  display: flex;
  min-width: 210px;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  background-color: ${props => props.theme.colors.grey200};
`;

storiesOf(
  'Icon',
  module
).addWithInfo(
  'Icon',
  'Renders an icon from the Google Material Design icon set. See material.io for a list of icons',
  () => {
    return (
      <GridContainer>
        {ICONS.values.map(icon => (
          <IconBlock key={icon}>
            <Icon color="blue400" size={24}>
              {icon}
            </Icon>
            <Text>{icon}</Text>
          </IconBlock>
        ))}
      </GridContainer>
    );
  }
);
