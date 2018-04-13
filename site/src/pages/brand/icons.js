import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

import Icon from '../../../../src/components/icon';

import {ICONS} from '../../../../src/components/icon/constants';

const IconGridContainer = styled('div')`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(4, 25%);
  padding: 0 3px 0 0;
  background-color: ${props => props.theme.colors.grey300};
  border: 1px solid ${props => props.theme.colors.grey300};
`;

const IconBlock = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  min-height: 120px;
  background-color: ${props => props.theme.colors.white};
`;

const IconTitle = styled.span`
  font-size: 14px;
  margin-top: 8px;
  font-weight: 400;
  color: ${props => props.theme.colors.navy600};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: ${props => props.theme.layout.borderRadiusInput};
  border: 1px solid ${props => props.theme.colors.grey400};
  color: ${props => props.theme.colors.navy700};
  font-size: 14px;
  padding: 4px 16px;
  margin-bottom: 16px;
`;

class IconSetWithSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icons: ICONS.values,
    };

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(ev) {
    const filteredIcons = ICONS.values.filter(icon =>
      icon.includes(ev.target.value)
    );

    this.setState({
      icons: filteredIcons,
    });
  }

  render() {
    return (
      <div>
        <StyledInput
          onKeyUp={this.onKeyUp}
          type="text"
          placeholder="Search icon set"
        />
        <IconGridContainer>
          {this.state.icons.map(icon => (
            <IconBlock key={icon}>
              <Icon color="navy700" size={26}>
                {icon}
              </Icon>
              <IconTitle>{icon}</IconTitle>
            </IconBlock>
          ))}
        </IconGridContainer>
      </div>
    );
  }
}

const BrandIconsPage = () => (
  <DocumentationContent
    pageTitle="Iconography"
    pageDescription="Our icon set is a mixture of Material Icons, and custom icons designed in house."
  >
    <Wrapper>
      <h1>Icon Set</h1>
      <p>
        The icons used throughout Kalo are a mixture of{' '}
        <a href="https://material.io/icons/">Material icons</a> custom icons
        designed in house.
      </p>

      <h2>Implementation</h2>
      <p>
        If you're developing in the platform, you'll want to use the Icon
        component. See <Link to="/component/icon">here</Link> for documentation
        on this component.
      </p>

      <h2>Full set</h2>
      <IconSetWithSearch />
    </Wrapper>
  </DocumentationContent>
);

export default BrandIconsPage;
