import React, {Component} from 'react';
import {toPairs} from 'lodash';
import styled from 'react-emotion';

import withQueries, {gql} from '../hocs/withQueries';
import Documentation from '../layouts/documentation';
import {H2} from '../components/typography';

import * as Stories from '../.stories';

const StoryContainer = styled('div')`
  margin: 32px 0;
  border: 1px solid ${props => props.theme.colors.grey400};
  border-radius: ${props => props.theme.layout.borderRadius};
  width: 100%;
  padding: 16px;
`;

const StoryExample = styled('div')`
  margin: 16px 0 0;
  display: inline-block;
`;

const StoryTitle = styled('div')`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.colors.navy600};
`;

export class ComponentDocumentation extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
    };
  }
  async componentDidUpdate(prevProps) {
    if (
      prevProps.data.loading &&
      !this.props.data.loading &&
      this.props.data.component
    ) {
      const load = Stories[this.props.data.component.name];
      if (load) {
        const stories = await load;
        this.setState({stories: toPairs(stories)}); // eslint-disable-line react/no-did-update-set-state
      }
    }
  }
  render() {
    const {data} = this.props;
    const {stories} = this.state;
    const {components, component, loading} = data;
    const nav = {
      title: 'Components',
      links: loading
        ? []
        : components.map(c => ({
            title: c.name,
            path: `/component?componentName=${c.name}`,
            as: `/components/${c.name}`,
          })),
    };
    return loading ? (
      'Loading'
    ) : !component ? (
      '404'
    ) : (
      <Documentation nav={nav} pageTitle={component.name}>
        <span>
          <p>Markdown content to be inserted here</p>
          {stories.length >= 1 ? (
            <React.Fragment>
              <H2>
                {stories.length} {stories.length === 1 ? 'Story' : 'Stories'}
              </H2>
              {stories.map(([name, Story]) => (
                <StoryContainer key={name}>
                  <StoryTitle>
                    {name
                      .replace(/([A-Z])/g, ' $1')
                      .charAt(0)
                      .toUpperCase() + name.replace(/([A-Z])/g, ' $1').slice(1)}
                  </StoryTitle>
                  <StoryExample>
                    <Story />
                  </StoryExample>
                </StoryContainer>
              ))}
            </React.Fragment>
          ) : null}
        </span>
      </Documentation>
    );
  }
}

export default withQueries(
  gql`
    query componentPage($componentName: String!) {
      components {
        name
      }
      component(name: $componentName) {
        id
        name
        dependencies {
          name
          component {
            id
            name
            module {
              path
            }
          }
        }
        dependants {
          name
          component {
            id
            name
            module {
              path
            }
          }
        }
        usages {
          name
          props {
            name
          }
          byComponent {
            name
            module {
              path
            }
          }
        }
        module {
          path
        }
      }
    }
  `,
  {
    options: ({url}) => ({variables: {componentName: url.query.componentName}}),
  }
)(ComponentDocumentation);
