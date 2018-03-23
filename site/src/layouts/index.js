import React from 'react';
import {ThemeProvider} from 'emotion-theming';
import styled, {injectGlobal} from 'react-emotion';
import {groupBy, upperFirst, camelCase} from 'lodash';

import Header from '../components/navigation';
import SideNav from '../components/side-nav';

import theme from '../../../src/components/theme';
import IconSymbols from '../../../src/components/icon-symbols';
// import '../../../src/styles/transitions.css';

import FSPBlond from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-Blond.woff';
import FSPBlond2 from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-Blond.woff2';
import FSPNormal from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-Normal.woff';
import FSPNormal2 from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-Normal.woff2';
import FSPMedium from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-Medium.woff';
import FSPMedium2 from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-Medium.woff2';
import FSPSemiBold from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-SemiBold.woff';
import FSPSemiBold2 from '../../../src/styles/fonts/fakt-soft-pro/FaktSoftPro-SemiBold.woff2';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 300;
    font-style: normal;
    src: url(${FSPBlond}) format('woff'),
      url(${FSPBlond2}) format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 400;
    font-style: normal;
    src: url(${FSPNormal}) format('woff'),
    url(${FSPNormal2}) format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 500;
    font-style: normal;
    src: url(${FSPMedium}) format('woff'),
    url(${FSPMedium2}) format('woff2');
  }

  @font-face {
    font-family: 'WebFaktSoftPro';
    font-weight: 600;
    font-style: normal;
    src: url(${FSPSemiBold}) format('woff'),
    url(${FSPSemiBold2}) format('woff2');
  }

  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  } 
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: 'WebFaktSoftPro', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Courier', Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
      'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
      'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    tab-size: 4;
    -ms-hyphens: none;
    hyphens: none;
    background-color: #f9fafc;
    color: #374561;
    border-radius: 4px;
  }
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #eee8d5;
  }
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #eee8d5;
  }
  pre[class*='language-'] {
    padding: 24px 32px;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #839496;
  }
  .token.punctuation {
    color: #586e75;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.operator,
  .token.boolean,
  .token.number {
    color: #cb4b16;
  }
  .token.property {
    color: #b58900;
  }
  .token.tag {
    color: #268bd2;
  }
  .token.string {
    color: #2aa198;
  }
  .token.selector {
    color: #6c71c4;
  }
  .token.attr-name {
    color: #cb4b16;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #2aa198;
  }
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #859900;
  }
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #2aa198;
  }
  .token.placeholder,
  .token.variable {
    color: #268bd2;
  }
  .token.deleted {
    text-decoration: line-through;
  }
  .token.inserted {
    border-bottom: 1px dotted #002b36;
    text-decoration: none;
  }
  .token.italic {
    font-style: italic;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.important {
    color: #dc322f;
  }
  .token.entity {
    cursor: help;
  }
  pre > code.highlight {
    outline: 0.4em solid #dc322f;
    outline-offset: 0.4em;
  }

  .t-scale-enter {
    opacity: 0.01;
    transform: scale(0);
  }

  .t-scale-enter.t-scale-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
  }

  .t-scale-leave {
    opacity: 1;
  }

  .t-scale-leave.t-scale-leave-active {
    opacity: 0.01;
    transform: scale(0);
    transition: all 0.3s ease-in;
  }

  .t-scale-appear {
    opacity: 0.01;
    transform: scale(0.8);
  }

  .t-scale-appear.t-scale-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
  }

  .t-slide-enter,
  .t-slide-appear,
  .t-slide-leave.t-slide-leave-active {
    opacity: 0;
    transform: translateY(-20px);
  }

  .t-slide-from-right-enter,
  .t-slide-from-right-appear,
  .t-slide-from-right-leave.t-slide-from-right-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .t-slide-inverted-enter,
  .t-slide-inverted-appear,
  .t-slide-inverted-leave.t-slide-inverted-leave-active {
    opacity: 0;
    transform: translateY(20px);
  }

  .t-slide-enter.t-slide-enter-active,
  .t-slide-appear.t-slide-appear-active,
  .t-slide-leave,
  .t-slide-from-right-enter.t-slide-from-right-enter-active,
  .t-slide-from-right-appear.t-slide-from-right-appear-active,
  .t-slide-from-right-leave,
  .t-slide-inverted-enter.t-slide-inverted-enter-active,
  .t-slide-inverted-appear.t-slide-inverted-enter-appear,
  .t-slide-inverted-leave {
    opacity: 1;
    transform: none;
  }

  .t-slide-enter.t-slide-enter-active,
  .t-slide-appear.t-slide-appear-active,
  .t-slide-leave.t-slide-leave-active,
  .t-slide-from-right-enter.t-slide-from-right-enter-active,
  .t-slide-from-right-appear.t-slide-from-right-appear-active,
  .t-slide-from-right-leave.t-slide-from-right-leave-active,
  .t-slide-inverted-enter.t-slide-inverted-enter-active,
  .t-slide-inverted-appear.t-slide-inverted-appear-active,
  .t-slide-inverted-leave.t-slide-inverted-leave-active {
    transition-property: all;
    transition-duration: 0.3s;
  }

  .t-slide-enter.t-slide-enter-active,
  .t-slide-leave.t-slide-leave-active,
  .t-slide-from-right-enter.t-slide-from-right-enter-active,
  .t-slide-from-right-leave.t-slide-from-right-leave-active,
  .t-slide-inverted-enter.t-slide-inverted-enter-active,
  .t-slide-inverted-leave.t-slide-inverted-leave-active {
    transition-timing-function: cubic-bezier(0.2, 1, 0.2, 1);
  }

  @keyframes flop-down {
    0% {
      opacity: 0.01;
      transform: translate(0px, -40px) scale(0.85);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
      opacity: 1;
    }
  }

  .t-flop-down-enter {
    animation: flop-down 0.25s cubic-bezier(0.55, 0, 0.55, 0.2) normal;
  }

  .t-flop-down-leave {
    animation: flop-down 0.25s cubic-bezier(0.55, 0, 0.55, 0.2) reverse;
  }

  .t-fade-in-out-enter {
    position: absolute;
    opacity: 0.01;
  }

  .t-fade-in-out-enter.t-fade-in-out-enter-active {
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
  }

  .t-fade-in-out-leave {
    position: absolute;
    opacity: 1;
  }

  .t-fade-in-out-leave.t-fade-in-out-leave-active {
    opacity: 0.01;
    transition: all 0.3s ease-in;
  }

  .t-fade-in-out-appear {
    position: absolute;
    opacity: 0.01;
  }

  .t-fade-in-out-appear.t-fade-in-out-appear-active {
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);
  }

  .t-fade-enter {
    opacity: 0.01;
  }

  .t-fade-enter.t-fade-enter-active {
    opacity: 1;
    transition: all 0.3s ease-in;
  }

  .t-fade-leave {
    opacity: 1;
  }

  .t-fade-leave.t-fade-leave-active {
    opacity: 0.01;
    transition: all 0.3s ease-in;
  }

  .t-fade-appear {
    opacity: 0.01;
  }

  .t-fade-appear.t-fade-appear-active {
    opacity: 1;
    transition: all 0.3s 0.3s ease-in;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function Page({data, children, location}) {
  const {edges: pages} = data.allSitePage;
  const projectMeta = data.site.siteMetadata;
  const sitePages = [];
  const currentPath = location.pathname;
  const currentCategory = location.pathname.split(/[\\\/]/)[1];

  const stripPageNameFromPath = val =>
    val.replace(/\/(product|components|brand|meta)\//, '').replace(/\//, '');

  pages.map(page =>
    sitePages.push({
      slug: page.node.path,
      isCurrent: currentPath === page.node.path,
      name: upperFirst(
        stripPageNameFromPath(page.node.path.replace(/-/g, ' '))
      ),
      category: page.node.path.split(/[\\\/]/)[1],
    })
  );

  data.allMarkdownRemark.edges.map(
    page =>
      page.node.fields
        ? sitePages.push({
            slug: page.node.fields.slug,
            toc: page.node.tableOfContents,
            name: upperFirst(
              camelCase(stripPageNameFromPath(page.node.fields.slug))
            ),
            isCurrent: currentPath === page.node.fields.slug,
            category: page.node.fields.slug.split(/[\\\/]/)[1],
          })
        : false
  );

  const groupedSitePages = groupBy(sitePages, page => page.category);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header projectMeta={projectMeta} />
        <FlexWrapper>
          <SideNav currentCategory={currentCategory} links={groupedSitePages} />
          <div style={{paddingTop: 58, width: '100%'}}>{children()}</div>
        </FlexWrapper>
        <IconSymbols />
      </Container>
    </ThemeProvider>
  );
}

export const pageQuery = graphql`
  query AsideNavQuery {
    site {
      siteMetadata {
        version
        title
        githubRepoLink
        sketchKitLink
        sketchPaletteLink
      }
    }
    allMarkdownRemark(sort: {fields: [fields___componentName], order: ASC}) {
      edges {
        node {
          tableOfContents
          html
          fields {
            slug
          }
        }
      }
    }
    allSitePage(filter: {path: {regex: "/(brand|product|meta)/"}}) {
      edges {
        node {
          path
          component
        }
      }
    }
  }
`;
