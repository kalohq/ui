import React from 'react';
import styled from 'react-emotion';

import DocumentationContent from '../components/documentation-content';
import Wrapper from '../components/wrapper';
import '../../../lib/ui-bundle.css';

const IndexIntro = styled.div`
  width: 100%;
  padding: 128px 0 64px;
  background-color: ${props => props.theme.colors.grey200};
  color: ${props => props.theme.colors.navy900};

  p {
    font-size: 1.8rem;
    margin: 0;
  }

  h1 {
    font-weight: 700;
    font-size: 3.6rem;
    margin: 0 0 8px 0;
  }
`;

const IndexPage = () => {
  return (
    <div style={{width: '100%'}}>
      <IndexIntro>
        <Wrapper>
          <h1>Kalo Design</h1>
          <p>
            Components, guidelines, and resources for building products at Kalo
          </p>
        </Wrapper>
      </IndexIntro>
      <DocumentationContent style={{paddingTop: 0}}>
        <Wrapper>
          <h2>Simple</h2>
          <p>
            Our products should be designed to be intuitive, simple to use, and
            clean to the eye. Even though we’re solving complex needs, the user
            experience should feel effortless and save the user time allowing
            them to focus on the things that matter.
          </p>
          <h2>Clear</h2>
          <p>
            Every element should be designed to help the user focus. It should
            be clear to the user the priorities, visual hierarchy, contextual
            awareness and path to success. Everything should have clarity, never
            use ambiguous design or language.
          </p>

          <h2>Make work beautiful</h2>
          <p>
            Beautiful should go beyond just visuals. Our products should give
            our users a world class experience to look at and use. Every UI
            decision should consider the end user and always have a purpose, we
            don’t just do ‘pretty’ for the sake of it.
          </p>

          <h2>Think like our users</h2>
          <p>
            Understand how our users think and feel through research and
            empathy, understand the user's path to success and remove anything
            unnecessary.
          </p>
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
      }
    }
  }
`;
