import React, {Component} from 'react';
import styled from 'styled-components';
import {find} from 'lodash';

import Page from '../page';
import SideNav from '../../components/side-nav';

const routes = [
  {
    title: 'Brand',
    key: 'brand',
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
    title: 'Product',
    key: 'product',
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

export default class Documentation extends Component {
  render() {
    const {
      children,
      category,
      nav = find(routes, route => route.key === category),
    } = this.props;
    return (
      <Page>
        <Container>
          <SideNav title={nav.title} links={nav.links} />
          <Main>{children}</Main>
        </Container>
      </Page>
    );
  }
}
