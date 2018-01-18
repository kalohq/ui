import * as React from 'react';
import {upperFirst, camelCase} from 'lodash';
import styled from 'react-emotion';

import DocumentationContent from '../components/documentation-content';
import PropTable from '../components/prop-table';

import * as Stories from '../data/stories.js';

const StoryContainer = styled.div`
  width: 100%;
  margin: 32px 0;
  background-color: #fff;
  border: 1px solid ${props => props.theme.colors.grey300};
  border-radius: ${props => props.theme.layout.borderRadius};
`;

const StoryContainerHeader = styled.div`
  width: 100%;
  border-radius: ${props => props.theme.layout.borderRadius} 0 0
    ${props => props.theme.layout.borderRadius};
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
  padding: 16px;
`;

const StoryTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.navy600};
  margin: 0;
  padding: 0;
`;

const StoryDescription = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors.navy600};
`;

const StoryMain = styled.div`
  width: 100%;
  padding: 32px 16px;
  background-color: ${props =>
    props.background === 'white'
      ? props.theme.colors.white
      : props.theme.colors.grey200};
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.navy700};
`;

const FlexWrapper = styled.div`display: flex;`;

const DocContent = styled.div`width: 100%;`;

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
    <FlexWrapper>
      <DocContent>
        <DocumentationContent
          pageTitle={`${componentName} - ${site.siteMetadata.title}`}
          pageDescription={component.excerpt}
          raw={component.html}
        />
        {componentProps ? (
          <section>
            <StyledTitle id="props">Props</StyledTitle>
            <PropTable data={componentProps} />
          </section>
        ) : null}
        {stories ? (
          <div>
            <StyledTitle id="examples">
              {stories.length === 1 ? 'Example ' : 'Examples '}
              ({stories.length})
            </StyledTitle>
            {stories.map(story => {
              const Story = story.render;
              return (
                <StoryContainer key={story.title}>
                  <StoryContainerHeader>
                    <StoryTitle>{story.title}</StoryTitle>
                    <StoryDescription>{story.description}</StoryDescription>
                  </StoryContainerHeader>
                  <StoryMain background={story.background}>
                    <Story />
                  </StoryMain>
                </StoryContainer>
              );
            })}
          </div>
        ) : null}
      </DocContent>
    </FlexWrapper>
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
