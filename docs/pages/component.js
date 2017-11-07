import React from 'react';
import PureComponent from 'react-pure-render/component';

import Aside from 'components/aside';
import Page from 'layouts/page';
import Documentation from 'layouts/documentation';
import PropTable from 'components/prop-table';
import MarkdownContent from 'components/markdown-content';

import componentData from 'content/components.json';

export default class ComponentDocumentation extends PureComponent {
  constructor() {
    super();
    const links = [];
    const dataToLinks = Object.keys(componentData).map(item => {
      return links.push({
        title: item,
        link: `/components/${item}`,
      });
    });

    this.state = {
      data: componentData,
      links: links,
    };
  }

  componentWillMount() {
    const requestedComponent = this.props.url.query.componentName;
    this.setState({
      component: this.state.data[requestedComponent]['README'],
    });
  }

  render() {
    return (
      <Page>
        <Documentation data={this.state.links}>
          <MarkdownContent
            dangerouslySetInnerHTML={{__html: this.state.component.body}}
          />
          <PropTable />
        </Documentation>
      </Page>
    );
  }
}
