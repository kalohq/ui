import React, {Component} from 'react';
import {toPairs, groupBy, flattenDeep, identity} from 'lodash';
import styled from 'styled-components';

import withQueries, {gql} from '../hocs/withQueries';

import Documentation from '../layouts/documentation';
import * as Stories from '../.stories';

const StoryContainer = styled.div`margin: 32px;`;

export class ComponentDocumentation extends Component {
  state = {stories: []};
  async componentDidUpdate(prevProps) {
    if (
      prevProps.data.loading &&
      !this.props.data.loading &&
      this.props.data.component
    ) {
      const load = Stories[this.props.data.component.name];
      if (load) {
        const stories = await load;
        this.setState({stories: toPairs(stories)});
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
    return (
      <Documentation nav={nav}>
        {loading ? (
          'Loading'
        ) : !component ? (
          '404'
        ) : (
          <ul>
            <li>{component.name}</li>
            <li>{component.module.path}</li>
            <li>Total Usages ({component.usages.length})</li>
            <li>Component Dependencies ({component.dependencies.length}):</li>
            <ul>
              {component.dependencies.map(c => (
                <li key={c.component ? c.component.id : c.name}>
                  {c.component ? c.component.name : `Unresolved (${c.name})`}
                  {c.component ? (
                    <span>
                      {' '}
                      ({c.component.module ? c.component.module.path : 'DOM'})
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
            <li>Dependant Component ({component.dependants.length}):</li>
            <ul>
              {component.dependants.map(c => (
                <li key={c.component ? c.component.id : c.name}>
                  {c.component.name} ({c.component.module ? (
                    c.component.module.path
                  ) : (
                    'DOM'
                  )})
                </li>
              ))}
            </ul>
            <li>Props by usage:</li>
            <ul>
              {toPairs(
                groupBy(
                  flattenDeep(
                    component.usages.map(u => u.props.map(p => p.name))
                  ),
                  identity
                )
              )
                .map(([name, u]) => ({name, usages: u.length}))
                .sort((a, b) => (a.usages > b.usages ? -1 : 1))
                .map(p => (
                  <li key={p.name}>
                    {p.name} ({p.usages})
                  </li>
                ))}
            </ul>
            <li>Stories ({stories.length}):</li>
            <ul>
              {stories.map(([name, Story]) => (
                <li key={name}>
                  {name}
                  <StoryContainer>
                    <Story />
                  </StoryContainer>
                </li>
              ))}
            </ul>
          </ul>
        )}
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