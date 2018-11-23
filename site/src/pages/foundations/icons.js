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

const StatusIconSet = () => (
  <IconGridContainer>
    {Object.keys(ICONS.properties)
      .filter(
        icon =>
          ICONS.properties[icon].category &&
          ICONS.properties[icon].category.value === 'status'
      )
      .map(icon => (
        <IconBlock key={icon}>
          <Icon color="navy700" size={26}>
            {icon}
          </Icon>
          <IconTitle>{icon}</IconTitle>
        </IconBlock>
      ))}
  </IconGridContainer>
);

const SocialIconSet = () => (
  <IconGridContainer>
    {Object.keys(ICONS.properties)
      .filter(
        icon =>
          ICONS.properties[icon].category &&
          ICONS.properties[icon].category.value === 'social'
      )
      .map(icon => (
        <IconBlock key={icon}>
          <Icon color="navy700" size={26}>
            {icon}
          </Icon>
          <IconTitle>{icon}</IconTitle>
        </IconBlock>
      ))}
  </IconGridContainer>
);

export default () => (
  <DocumentationContent
    pageTitle="Iconography"
    pageDescription="Our icon set is a mixture of Material Icons, and custom icons designed in house."
  >
    <Wrapper>
      <h1>Iconography</h1>
      <p>
        Icons are powerful visual helpers, and should be used with care. Icons
        are visual representations of commands, files, devices, directories, or
        common actions and are used to provide visual context and enhance
        usability.
      </p>

      <p>
        Icons should have a clear purpose, using the same icon for multiple uses
        can quickly dilute the meaning and add confusion.
      </p>

      <h2>Best practices</h2>

      <ul>
        <li>
          Icons are on a 20px grid and exported with padding on a 24px art
          board.
        </li>
        <li>
          When scaling down icons, smaller elements like circles should be solid
          to help with legibility.
        </li>
        <li>
          Icons should always match the text colour they are accompanying to
          create a clear relationship. Primary navigation and badges don’t need
          to follow this convention.
        </li>
        <li>
          If the copy and icon have different heights always vertically centre
          align them.
        </li>
        <li>
          Any spacing above or below should be measured from the largest
          component i.e. if the icon is 20px high and the copy is 16px high the
          spacing should be measured against the icon.
        </li>
      </ul>

      <h2>Implementation</h2>
      <p>
        If you're developing in the platform, you'll want to use the Icon
        component. See <Link to="/components/icon">here</Link> for documentation
        on this component.
      </p>

      <h2>Status Icons</h2>
      <p>
        These icons are used to display the status of resources across Kalo,
        such as Projects, Tasks, and Invoices
      </p>
      <StatusIconSet />

      <h2>Social Icons</h2>
      <SocialIconSet />
      <h2>Full set</h2>
      <IconSetWithSearch />
    </Wrapper>
  </DocumentationContent>
);
