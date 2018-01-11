import * as React from 'react';
import {upperFirst, camelCase} from 'lodash';
import styled from 'react-emotion';

import MarkdownContent from '../components/markdown-content';

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
  padding: 16px;
  background-color: ${props => props.theme.colors.grey200};
`;

export default function ComponentDocumentation(props) {
  const {data} = props;
  const {markdownRemark: component} = data;
  const componentName = upperFirst(camelCase(component.fields.componentName));
  const stories = Stories[componentName]
    ? Stories[componentName].examples
    : false;

  return (
    <div>
      <MarkdownContent dangerouslySetInnerHTML={{__html: component.html}} />
      {stories ? (
        <div>
          <h3>
            {stories.length}
            {stories.length === 1 ? 'story' : 'stories'}
          </h3>
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
    </div>
  );
}

export const pageQuery = graphql`
  query ComponentByPath($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      timeToRead
      fields {
        componentName
      }
    }
  }
`;
