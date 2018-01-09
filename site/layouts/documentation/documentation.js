import React, {Component} from 'react';
import styled from 'react-emotion';
import {find} from 'lodash';
import {Helmet} from 'react-helmet';

import Page from '../page';
import SideNav from '../../components/side-nav';
import {H1} from '../../components/typography';

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
  padding-left: 320px;
`;

const Main = styled.main`
  padding: 80px 60px;
  width: 100%;
  max-width: 960px;
`;

export default class Documentation extends Component {
  render() {
    const {
      children,
      category,
      pageTitle,
      nav = find(routes, route => route.key === category),
    } = this.props;
    return (
      <Page>
        <Container>
          <Helmet title={`${pageTitle} - Kalo Design System`} />
          <SideNav title={nav.title} links={nav.links} />
          <Main>
            <H1>{pageTitle}</H1>
            {children}
          </Main>
        </Container>
      </Page>
    );
  }
}
