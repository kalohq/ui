import * as React from 'react';
import {upperFirst, camelCase} from 'lodash';
import styled from 'react-emotion';

import DocumentationContent from '../components/documentation-content';
import PropTable from '../components/prop-table';
import Snippet from '../components/snippet';
import Wrapper from '../components/wrapper';

import * as Stories from '../data/stories.js';

const StoryContainer = styled.div`
  width: 100%;
  margin: 32px 0;
`;

const StoryTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: ${props => props.theme.colors.navy700};
  margin: 0 0 8px;
  padding: 0 0 8px;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
`;

const StoryDescription = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors.navy600};
`;

const StoryMain = styled.div`
  width: 100%;
  padding: 32px 16px;
  margin-top: 16px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey300};
  border-radius: ${props => props.theme.layout.borderRadius}
    ${props => props.theme.layout.borderRadius} 0 0;
`;

const StorySnippet = styled.div`
  background-color: ${props => props.theme.colors.grey200};
  color: #586e75;
  width: 100%;
  font-size: 14px;
  line-height: 1.4;
  font-family: monospace;
  padding: 16px;
  overflow-x: auto;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.navy700};
`;

export default function ComponentDocumentation(props) {
  const {data} = props;
  const {markdownRemark: component, allComponentMetadata, site} = data;

  const componentProps = allComponentMetadata
    ? allComponentMetadata.edges[0].node.props
    : false;
  const componentName = upperFirst(camelCase(component.fields.componentName));
  const stories = Stories[componentName]
    ? Stories[componentName].examples
    : false;
  return (
    <div style={{width: '100%'}}>
      <Wrapper>
        <DocumentationContent
          pageTitle={`${componentName} - ${site.siteMetadata.title}`}
          pageDescription={component.excerpt}
          raw={component.html}
        />
      </Wrapper>
      <Wrapper>
        {componentProps ? (
          <section>
            <StyledTitle id="props">Props</StyledTitle>
            <PropTable data={componentProps} />
          </section>
        ) : null}
      </Wrapper>
      {stories ? (
        <Wrapper>
          {stories.map(story => {
            const Story = story.render;
            return (
              <StoryContainer key={story.title}>
                <StoryTitle>{story.title}</StoryTitle>
                <StoryDescription>{story.description}</StoryDescription>
                <StoryMain>
                  <Story />
                </StoryMain>
                <StorySnippet>
                  <Snippet depth={0} node={story.render()} />
                </StorySnippet>
              </StoryContainer>
            );
          })}
        </Wrapper>
      ) : null}
    </div>
  );
}

export const pageQuery = graphql`
  query ComponentByPath($componentName: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allComponentMetadata(filter: {displayName: {eq: $componentName}}) {
      edges {
        node {
          displayName
          props {
            required
            docblock
            name
            type {
              name
              raw
            }
            flowType {
              name
              raw
              nullable
            }
          }
        }
      }
    }
    markdownRemark(fields: {componentName: {eq: $componentName}}) {
      tableOfContents
      html
      excerpt
      timeToRead
      fields {
        componentName
      }
    }
  }
`;
