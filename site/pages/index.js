import React from 'react';
import styled from 'react-emotion';

import Page from '../layouts/page';

const LINKS = [
  {
    title: 'Color',
    description: 'Our brand colors',
    link: '/brand/color',
  },
  {
    title: 'Download logos',
    description: 'Our brand logos and how to use them',
    link: '/brand/logos/download',
  },
  {
    title: 'Components',
    description: 'React components, code snippets, and guidelines',
    link: '/components/Button',
  },
  {
    title: 'Product Glossary',
    description: 'Commonly used terms and phrases used across Kalo',
    link: '/product/glossary',
  },
];

const IntroCopy = styled.p`
  font-size: 1.2rem;
  line-height: 1.6em;
`;

const PageContainer = styled.main`
  background-color: ${props => props.theme.colors.grey300};
  min-height: 100vh;
  padding-top: 100px;
`;

const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 720px;
`;

const LinkBoxes = styled.div`margin: 16px 0;`;

const LinkBox = styled.a`
  display: block;
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.grey400};
  margin-bottom: 16px;
  padding: 16px;
  text-decoration: none;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy700};
    margin: 0 0 4px;
    padding: 0;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.navy500};
    padding: 0;
    margin: 0;
  }
`;

export default function Index() {
  return (
    <Page>
      <PageContainer>
        <Inner>
          <h1>Kalo Design System</h1>
          <IntroCopy>
            Welcome to the documentation for our internal design system. This
            site all of the information that you need to know for how we build
            products at Kalo.
          </IntroCopy>
          <LinkBoxes>
            {LINKS.map(link => (
              <LinkBox href={link.link} key={link.title}>
                <h3>{link.title}</h3>
                <span>{link.description}</span>
              </LinkBox>
            ))}
          </LinkBoxes>
        </Inner>
      </PageContainer>
    </Page>
  );
}
