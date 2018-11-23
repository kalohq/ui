import React from 'react';
import styled from 'react-emotion';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

import theme from '../../../../src/components/theme';

const colors = [
  {
    swatch: 'navy',
    key: 700,
    colors: [300, 400, 500, 600, 700],
  },
  {
    swatch: 'pink',
    key: 500,
    colors: [300, 400, 500, 600, 700],
  },
  {
    swatch: 'orange',
    key: 500,
    colors: [300, 400, 500, 600, 700],
  },
  {
    swatch: 'blue',
    key: 500,
    colors: [300, 400, 500, 600, 700],
  },
  {
    swatch: 'green',
    key: 500,
    colors: [300, 400, 500, 600, 700],
  },
  {
    swatch: 'purple',
    key: 500,
    colors: [300, 400, 500, 600, 700],
  },
  {
    swatch: 'grey',
    key: 500,
    colors: [200, 300, 400, 500, 600, 700],
  },
];

const HorizontalSwatchGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 8px;
  margin-bottom: 24px;
`;

const HorizontalSwatch = styled.div`
  height: 48px;
  background-color: ${props => props.theme.colors[props.color]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
`;

const Swatches = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const StyledSwatchHeader = styled.div`
  width: 100%;
  padding: 32px 16px;
  background-color: ${props => props.theme.colors[props.color]};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

const StyledSwatchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors[props.color]};
  height: 50px;
  padding: 16px;
`;

const StyledSwatchItemColorName = styled.span`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  color: ${props =>
    props.isLight ? props.theme.colors.navy600 : props.theme.colors.white};
  span {
    font-weight: 400;
    float: right;
  }
`;

const Swatch = ({colorGroup, name, keyColor}) => (
  <div>
    <StyledSwatchHeader color={`${name}${keyColor}`}>{name}</StyledSwatchHeader>
    {colorGroup.map(color => (
      <StyledSwatchItem key={`${name}-${color}`} color={`${name}${color}`}>
        <StyledSwatchItemColorName
          isLight={Boolean(color === 200 || color === 300)}
        >
          {color} <span>{theme.colors[name + color]}</span>
        </StyledSwatchItemColorName>
      </StyledSwatchItem>
    ))}
  </div>
);

export default () => (
  <DocumentationContent
    pageTitle="Color Palette"
    pageDescription="The Kalo brand palette consists of two primary colors, and four secondary."
  >
    <Wrapper>
      <h1>Color</h1>
      <p>
        The Kalo brand palette consists of two primary colors, and four
        secondary.
      </p>
      <h2>Colors and variables</h2>
      <p>
        The whole color palette is available in several different formats (CSS
        variables, JS variables, and via the theme prop). Variables use the
        color name (seen below on the right). For example, to use pink in CSS,
        access it like so:
      </p>
      <h2>Core Palette</h2>

      <HorizontalSwatchGroup>
        {colors.map(color => (
          <HorizontalSwatch
            key={color.swatch}
            color={`${color.swatch}${color.key}`}
          >
            {color.swatch}
            {color.key}
          </HorizontalSwatch>
        ))}
      </HorizontalSwatchGroup>

      <h2>Extended Palette</h2>

      <Swatches>
        {colors.map(swatch => (
          <Swatch
            name={swatch.swatch}
            key={swatch.swatch}
            keyColor={swatch.key}
            colorGroup={swatch.colors}
          />
        ))}
      </Swatches>
    </Wrapper>
  </DocumentationContent>
);
