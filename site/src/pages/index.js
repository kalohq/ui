import React from 'react';
import styled from 'react-emotion';

import ActionCard from '../components/action-card';
import DocumentationContent from '../components/documentation-content';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 16px 16px;
  grid-template-columns: repeat(2, 50%);
`;

const IndexPage = ({data}) => {
  return (
    <DocumentationContent>
      <h1>Kalo UI Documentation</h1>
      <p>
        Welcome to the documentation for our internal design system. This site
        all of the information that you need to know for how we build products
        at Kalo.
      </p>
      <GridContainer>
        <ActionCard
          title="Color"
          description="Our brand colors"
          link="/brand/color"
        />
        <ActionCard
          title="Download logos"
          description="Our brand logos and how to use them"
          link="/brand/logos"
        />
        <ActionCard
          title="Components"
          description="React components, code snippets, and guidelines"
          link="/components/button"
        />
        <ActionCard
          title="Sketch Kit"
          description="Sketch library implementation for the Kalo Design System"
          link={data.site.siteMetadata.sketchKitLink}
        />
      </GridContainer>
    </DocumentationContent>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        githubRepoLink
        sketchKitLink
      }
    }
  }
`;
