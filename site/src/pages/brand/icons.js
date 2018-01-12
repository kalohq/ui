import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import Icon from '../../../../src/components/icon';

import {ICONS} from '../../../../src/components/icon/constants';

const IconGridContainer = styled('div')`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(5, 20%);
`;

const IconBlock = styled('div')`
  display: flex;
  min-width: 210px;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  background-color: ${props => props.theme.colors.grey200};
`;

const BrandIconsPage = () => (
  <div>
    <h1>Icon Set</h1>
    <p>
      The icons used throughout Kalo are a mixture of{' '}
      <a href="https://material.io/icons/">Material icons</a> custom icons
      designed in house.
    </p>

    <h2>Implementation</h2>
    <p>
      If you're developing in the platform, you'll want to use the Icon
      component. See <Link to="/component/icon">here</Link> for documentation on
      this component.
    </p>

    <h2>Full set</h2>
    <IconGridContainer>
      {ICONS.values.map(icon => (
        <IconBlock key={icon}>
          <Icon color="blue400" size={36}>
            {icon}
          </Icon>
          <span>{icon}</span>
        </IconBlock>
      ))}
    </IconGridContainer>
  </div>
);

export default BrandIconsPage;
