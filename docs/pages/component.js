import React from 'react';
import PureComponent from 'react-pure-render/component';

import Aside from 'components/aside';
import Main from 'components/main';
import Page from 'layouts/page';

export default class ComponentDocumentation extends PureComponent {
  render() {
    return (
      <Page>
        <Aside />
        <Main>
          <h1>{this.props.url.query.componentName}</h1>
        </Main>
      </Page>
    );
  }
}
