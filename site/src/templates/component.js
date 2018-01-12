import * as React from 'react';
import {upperFirst, camelCase} from 'lodash';
import styled from 'react-emotion';

import MarkdownContent from '../components/markdown-content';
import Toc from '../components/toc';
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
  padding: 8px 16px;
`;

const StoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.navy600};
  margin: 0;
  padding: 0;
`;

const StoryDescription = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.navy600};
`;

const StoryMain = styled.div`
  width: 100%;
  padding: 32px 16px;
  background-color: ${props => props.theme.colors.grey200};
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.navy700};
`;

const FlexWrapper = styled.div`display: flex;`;

const DocContent = styled.div`width: 100%;`;

const DocToc = styled.div`
  position: relative;
  min-width: 220px;
  margin-left: 64px;
`;

export default function ComponentDocumentation(props) {
  const {data} = props;
  const {markdownRemark: component, componentMetadata: componentProps} = data;

  console.log(componentProps);

  const componentName = upperFirst(camelCase(component.fields.componentName));
  const stories = Stories[componentName]
    ? Stories[componentName].examples
    : false;

  return (
    <FlexWrapper>
      <DocContent>
        <MarkdownContent dangerouslySetInnerHTML={{__html: component.html}} />
        {componentProps.props ? (
          <section>
            <StyledTitle id="props">Props</StyledTitle>
            <PropTable data={componentProps.props} />
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
                  <StoryMain>
                    <Story />
                  </StoryMain>
                </StoryContainer>
              );
            })}
          </div>
        ) : null}
      </DocContent>
      {component.tableOfContents ? (
        <DocToc>
          <Toc data={component.tableOfContents} />
        </DocToc>
      ) : null}
    </FlexWrapper>
  );
}

export const pageQuery = graphql`
  query ComponentByPath($slug: String!) {
    componentMetadata(fields: {slug: {eq: $slug}}) {
      displayName
      props {
        name
        required
      }
      fields {
        componentName
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
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
