import React from 'react';
import styled from 'styled-components';

import Page from 'layouts/page';

const LINKS = [
  {
    title: 'Color',
    link: '/brand/color',
  },
  {
    title: 'Download logos',
    link: '/brand/logos/download',
  },
  {
    title: 'Components',
    link: '/components',
  },
  {
    title: 'Product Glossary',
    link: '/produt/glossary',
  },
];

const IntroSection = styled.header`
  padding: 120px 0;
  background-color: lightgrey;
  text-align: center;
`;

const MainSection = styled.main`padding: 40px 0;`;

const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

const LinkBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 10px;
`;

const LinkBox = styled.a`
  display: block;
  border-radius: 4px;
  background-color: lime;
  color: red;
  padding: 16px 8px;
`;

export default function Index() {
  return (
    <Page>
      <IntroSection>
        <h1>Primary Title</h1>
        <p>General introduction to the Kalo Design System</p>
      </IntroSection>
      <MainSection>
        <Inner>
          <LinkBoxes>
            {LINKS.map(link => (
              <LinkBox link={link.link} key={link.title}>
                {link.title}
              </LinkBox>
            ))}
          </LinkBoxes>
        </Inner>
      </MainSection>
    </Page>
  );
}
