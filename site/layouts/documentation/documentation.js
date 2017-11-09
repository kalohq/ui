import React from 'react';
import styled from 'styled-components';
import PureComponent from 'react-pure-render/component';
import {find} from 'lodash';

import Page from 'layouts/page';
import Aside from 'components/aside';
import MarkdownContent from 'components/markdown-content';

const routes = [
  {
    groupTitle: 'Brand',
    category: 'brand',
    links: [
      {
        title: 'Colors',
        path: '/brand/color',
      },
      {
        title: 'Typography',
        path: '/brand/typography',
      },
      {
        title: 'Illustrations',
        path: '/brand/illustrations',
      },
      {
        title: 'Logos',
        path: '/brand/logos',
      },
    ],
  },
  {
    groupTitle: 'Product',
    category: 'product',
    links: [
      {
        title: 'Personas',
        path: '/product/personas',
      },
      {
        title: 'Glossary',
        path: '/product/glossary',
      },
    ],
  },
];

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Main = styled.main`
  padding: 80px 60px;
  max-width: 920px;
`;

export default class Documentation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      routes,
    };
  }

  componentWillMount(props) {
    const currentGroup = find(this.state.routes, [
      'category',
      this.props.category,
    ]);
    if (currentGroup) {
      this.setState({
        data: currentGroup,
      });
    }
  }

  render() {
    const {pageTitle, children} = this.props;
    return (
      <Page>
        <Container>
          <Aside data={this.state.data} />
          <Main>
            <h1>{pageTitle}</h1>
            <MarkdownContent>{children}</MarkdownContent>
          </Main>
        </Container>
      </Page>
    );
  }
}
