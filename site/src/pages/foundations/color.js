import React from 'react';
import styled, {css} from 'react-emotion';
import Color from 'color';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

import theme from '../../../../src/components/theme';

const AA_COLOR_THRESHOLD = 4.5;

const colors = [
  {
    swatch: 'grey',
    key: '500',
    colors: [
      '000',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  },
  {
    swatch: 'navy',
    key: '900',
    colors: [
      '000',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  },
  {
    swatch: 'green',
    key: '500',
    colors: [
      '000',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  },
  {
    swatch: 'blue',
    key: '500',
    colors: [
      '000',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  },
  {
    swatch: 'purple',
    key: '500',
    colors: [
      '000',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  },
  {
    swatch: 'pink',
    key: '500',
    colors: [
      '000',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  },
  {
    swatch: 'orange',
    key: '500',
    colors: [
      '000',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  },
  {
    swatch: 'coral',
    key: '',
  },
];

const HorizontalSwatchGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
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
    props.isLight ? props.theme.colors.navy700 : props.theme.colors.white};
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
          isLight={Boolean(
            color === '000' || color === 100 || color === 200 || color === 300
          )}
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
        color name (seen below on the right). For example, to use red in CSS,
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
        {colors
          .filter(color => color.colors)
          .map(swatch => (
            <Swatch
              name={swatch.swatch}
              key={swatch.swatch}
              keyColor={swatch.key}
              colorGroup={swatch.colors}
            />
          ))}
      </Swatches>
      <h2>Accessibility</h2>
      <p>
        We try to build our interfaces to be as inclusive as possible. We use
        the WCAG 2.1 AA Level as a way of measuring whether the contrast between
        two colors is high enough that it is legible. As a rough guideline, try
        not to merge colors from the middle of the palette. For example, pink400
        text on a green600 background will not pass whereas purple900 on
        orange100 will.
      </p>

      <p>
        The following chart shows our color palette on a few commonly used
        background colors
      </p>

      {colors
        .filter(color => color.colors)
        .map(swatch =>
          swatch.colors.map(colorToken => {
            const actualColor = theme.colors[swatch.swatch + colorToken];

            const backgrounds = [
              'white',
              'grey000',
              'grey100',
              'navy900',
              'black',
            ];

            return (
              <div key={swatch.swatch + colorToken} style={{display: 'flex'}}>
                {backgrounds.map(background => (
                  <AccessibilityColorTestGroup
                    key={colorToken + background}
                    color={background}
                  >
                    <span style={{color: actualColor}}>
                      <span>
                        {swatch.swatch + colorToken} on {background}
                      </span>
                      <br />
                    </span>
                    <AccessibilityColorPassFailToken
                      color={background}
                      backgroundColor={actualColor}
                      hasPassed={Boolean(
                        Color(background).contrast(Color(actualColor)) >=
                          AA_COLOR_THRESHOLD
                      )}
                    >
                      {Color(background).contrast(Color(actualColor)) <=
                      AA_COLOR_THRESHOLD
                        ? 'FAIL'
                        : 'PASS'}
                    </AccessibilityColorPassFailToken>
                  </AccessibilityColorTestGroup>
                ))}
              </div>
            );
          })
        )}
    </Wrapper>
  </DocumentationContent>
);

const AccessibilityColorTestGroup = styled.div`
  flex: 1;
  text-align: center;
  padding: 24px 8px;
  margin: 4px 0 0 4px;
  background-color: ${props => props.theme.colors[props.color]};
  font-size: 12px;
  font-weight: 500;
`;

const AccessibilityColorPassFailToken = styled.span`
  font-size: 10px;
  font-weight: 600;
  color: ${props => props.backgroundColor};
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: 2px;
  padding: 2px 6px;
  margin-top: 4px;
  display: inline-block;

  ${props =>
    props.hasPassed &&
    css`
      background-color: ${props.backgroundColor};
      color: ${props.theme.colors[props.color]};
    `};
`;
