import React from 'react';
import markdown from 'markdown-in-js';
import styled from 'styled-components';

import withDocumentation from 'components/with-documentation';

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
    key: '#93A6C1',
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

export default withDocumentation({
  title: 'Color',
  category: 'brand',
})(markdown`
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

<Swatches>
  ${colors.map(swatch => (
    <Swatch
      name={swatch.swatch}
      key={swatch.swatch}
      keyColor={swatch.key}
      colors={swatch.colors}
    />
  ))}
</Swatches>
`);
