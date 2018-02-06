import React from 'react';
import styled from 'react-emotion';

import ActionCard from '../components/action-card';
import DocumentationContent from '../components/documentation-content';
import Wrapper from '../components/wrapper';

const GridContainer = styled.div`
  display: grid;
  grid-gap: 16px 16px;
  grid-template-columns: repeat(2, 50%);
`;

const IndexIntro = styled.div`
  width: 100%;
  padding: 62px 0;
  background-color: ${props => props.theme.colors.pink500};
  color: #fff;

  p {
    font-size: 1.2em;
  }

  h1 {
    font-weight: 600;
  }
`;

const IndexPage = ({data}) => {
  return (
    <div style={{width: '100%'}}>
      <IndexIntro>
        <Wrapper>
          <h1>Kalo Design System</h1>
          <p>
            Components, guidelines, and resources for building products at Kalo
          </p>
        </Wrapper>
      </IndexIntro>
      <DocumentationContent>
        <Wrapper>
          <h1>What is KDS?</h1>
          <p>
            The Kalo Design System, or 'KDS' for short, is a collection of
            components, guidelines, and toolkits to assist product designers and
            engineers with building products at Kalo. KDS helps enforce
            consistency, makes onboarding new team members quicker, and helps to
            speed up development of new features and products.
          </p>
          <GridContainer>
            <ActionCard
              title="Color"
              description="Our brand colors"
              link="/brand/color"
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
              externalLink={true}
            />
            <ActionCard
              title="Sketch Palette"
              description="A sketch palette with the Kalo brand colors"
              link={data.site.siteMetadata.sketchPaletteLink}
              externalLink={true}
              download={true}
            />
          </GridContainer>
        </Wrapper>
      </DocumentationContent>
    </div>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        githubRepoLink
        sketchKitLink
        sketchPaletteLink
      }
    }
  }
`;
