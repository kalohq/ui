import * as React from 'react';
import {upperFirst, camelCase} from 'lodash';
import styled, {css} from 'react-emotion';
import Prism from 'prismjs';
import reactElementToJSXString from 'react-element-to-jsx-string';

import DocumentationContent from '../components/documentation-content';
import PropTable from '../components/prop-table';
import Wrapper from '../components/wrapper';

import * as Stories from '../data/examples.js';

export default class ComponentDocumentation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);

    this.state = {
      currentTab: 'react',
    };
  }

  toggleTab(tab) {
    this.setState({
      currentTab: tab,
    });
  }

  render() {
    const {data} = this.props;
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
          <Tabs>
            <Tab
              isActive={this.state.currentTab === 'react'}
              onClick={() => this.toggleTab('react')}
            >
              React Components ({`
                ${stories &&
                  stories.filter(story => story.render).length} examples`})
            </Tab>
            <Tab
              isActive={this.state.currentTab === 'css'}
              onClick={() =>
                stories.filter(story => story.html).length !== 0 &&
                this.toggleTab('css')}
              isDisabled={stories.filter(story => story.html).length === 0}
            >
              Vanilla HTML/CSS ({`
                ${stories &&
                  stories.filter(story => story.html).length} examples`})
            </Tab>
          </Tabs>
        </Wrapper>
        {this.state.currentTab === 'react' ? (
          <section>
            <Wrapper>
              {componentProps && (
                <section>
                  <StyledTitle id="props">Props</StyledTitle>
                  <PropTable data={componentProps} />
                </section>
              )}
            </Wrapper>
            {stories ? (
              <Wrapper>
                {stories.map(story => {
                  const ReactStory = story.render;
                  const grammar = Prism.languages.html;
                  return (
                    <StoryContainer key={story.title}>
                      <StoryTitle>{story.title}</StoryTitle>
                      <StoryDescription>{story.description}</StoryDescription>
                      <StoryMain>
                        <ReactStory />
                      </StoryMain>
                      <StorySnippet>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: Prism.highlight(
                              reactElementToJSXString(story.render(), {
                                showDefaultProps: false,
                                useBooleanShorthandSyntax: false,
                              }),
                              grammar,
                              'html'
                            ),
                          }}
                        />
                      </StorySnippet>
                    </StoryContainer>
                  );
                })}
              </Wrapper>
            ) : null}
          </section>
        ) : (
          <section>
            <Wrapper>
              {stories.filter(story => story.html).map(story => {
                const grammar = Prism.languages.html;
                const HTMLStory = story.html;
                return (
                  <StoryContainer key={story.title}>
                    <StoryTitle>{story.title}</StoryTitle>
                    <StoryDescription>{story.description}</StoryDescription>
                    <StoryMain>
                      <HTMLStory />
                    </StoryMain>
                    <StorySnippet
                      dangerouslySetInnerHTML={{
                        __html: Prism.highlight(
                          reactElementToJSXString(story.html(), {
                            showDefaultProps: false,
                            useBooleanShorthandSyntax: false,
                          })
                            .replace('className', 'class')
                            .replace('htmlFor', 'for'),
                          grammar,
                          'html'
                        ),
                      }}
                    />
                  </StoryContainer>
                );
              })}
            </Wrapper>
          </section>
        )}
      </div>
    );
  }
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

const Tabs = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};
`;

const Tab = styled.button`
  font-size: 12px;
  color: ${props => props.theme.colors.navy700};
  font-weight: 600;
  border: 1px solid transparent;
  width: 50%;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: ${props =>
    props.isActive && `2px solid ${props.theme.colors.pink500}`};

  ${props =>
    props.isDisabled &&
    css`
      color: ${props.theme.colors.grey500};
      cursor: default;
    `};

  &:focus {
    outline: 0;
  }
`;
