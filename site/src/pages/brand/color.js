import React from 'react';
import styled from 'react-emotion';

import DocumentationContent from '../../components/documentation-content';

const colors = [
  {
    swatch: 'Pink',
    key: '#EA5F6E',
    colors: {
      pink300: '#FBDFE2',
      pink400: '#FDB3C8',
      pink500: '#EA5F6E',
      pink600: '#E05867',
      pink700: '#C34A57',
    },
  },
  {
    swatch: 'Navy',
    key: '#374561',
    colors: {
      navy300: '#F9FAFC',
      navy400: '#C6C7D8',
      navy500: '#93A6C1',
      navy600: '#546789',
      navy700: '#374561',
    },
  },
  {
    swatch: 'Blue',
    key: '#54C3DB',
    colors: {
      blue300: '#C1F4FF',
      blue400: '#65D2EA',
      blue500: '#54C3DB',
      blue600: '#4DB8CF',
      blue700: '#2BA7C2',
    },
  },
  {
    swatch: 'Green',
    key: '#3eb38a',
    colors: {
      green300: '#D8F0E8',
      green400: '#4FD2A4',
      green500: '#3eb38a',
      green600: '#38A07C',
      green700: '#298665',
    },
  },
  {
    swatch: 'Orange',
    key: '#FDB81C',
    colors: {
      orange300: '#FFEDB4',
      orange400: '#FFCE5E',
      orange500: '#FDB81C',
      orange600: '#F6AF0D',
      orange700: '#D89118',
    },
  },
];

const Swatches = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const StyledSwatchHeader = styled.div`
  width: 100%;
  padding: 32px 16px;
  background-color: ${props => props.color};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`;

const StyledSwatchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.color};
  height: 50px;
  padding: 16px;
  h3,
  h4 {
    margin: 0;
    padding: 0;
    color: #fff;
  }
  h3 {
    font-size: 14px;
    font-weight: 500;
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
  }
`;

const Swatch = ({colors, name, keyColor}) => (
  <div>
    <StyledSwatchHeader color={keyColor}>{name}</StyledSwatchHeader>
    {Object.keys(colors).map(color => (
      <StyledSwatchItem key={color} color={colors[color]}>
        <h3>{color}</h3>
        <h4>{colors[color]}</h4>
      </StyledSwatchItem>
    ))}
  </div>
);

const BrandColorsPage = () => (
  <DocumentationContent>
    <h1>Color</h1>
    <p>
      The Kalo brand palette consists of two primary colors, and four secondary.
    </p>
    <h2>Colors and variables</h2>
    <p>
      The whole color palette is available in several different formats (CSS
      variables, JS variables, and via the theme prop). Variables use the color
      name (seen below on the right). For example, to use pink in CSS, access it
      like so:
    </p>
    <h2>Palette</h2>

    <Swatches>
      {colors.map(swatch => (
        <Swatch
          name={swatch.swatch}
          key={swatch.swatch}
          keyColor={swatch.key}
          colors={swatch.colors}
        />
      ))}
    </Swatches>
  </DocumentationContent>
);

export default BrandColorsPage;
