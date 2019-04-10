import React from 'react';
import {ThemeProvider} from 'emotion-theming';
import styled, {injectGlobal} from 'react-emotion';
import {groupBy, upperFirst, camelCase} from 'lodash';

import Header from '../components/navigation';
import SideNav, {NAV_IN_FOOTER_BREAKPOINT} from '../components/side-nav';

import theme from '../../../src/components/theme';
import IconSymbols from '../../../src/components/icon-symbols';

import '../../../src/styles/kalo-ui-base.css';
import '../../../src/styles/kalo-ui-typography.css';
import '../../../src/styles/kalo-ui-transitions.css';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
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
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column-reverse;

  @media (min-width: ${NAV_IN_FOOTER_BREAKPOINT}) {
    flex-direction: row;
  }
`;

export default function Page({data, children, location}) {
  const {edges: pages} = data.allSitePage;
  const projectMeta = data.site.siteMetadata;
  const sitePages = [];
  const currentPath = location.pathname;
  const currentCategory = location.pathname.split(/[\\\/]/)[1];

  const stripPageNameFromPath = val =>
    val
      .replace(/\/(product|components|brand|foundations|test pages)\//, '')
      .replace(/\//, '');

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

  data.allMarkdownRemark.edges.map(page =>
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
        {currentCategory !== 'test-pages' && (
          <Header projectMeta={projectMeta} />
        )}
        <FlexWrapper>
          {currentCategory !== 'test-pages' && (
            <SideNav
              currentCategory={currentCategory}
              links={groupedSitePages}
            />
          )}
          <div
            style={{
              paddingTop: currentCategory !== 'test-pages' && 58,
              width: '100%',
            }}
          >
            {children()}
          </div>
        </FlexWrapper>
        <div
          style={{position: 'absolute', zIndex: '-3', pointerEvents: 'none'}}
        >
          <IconSymbols />
        </div>
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
        buildPreviewPullRequestId
        buildPreviewCommitRef
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
    allSitePage(
      filter: {path: {regex: "/(brand|product|foundations|test-pages)/"}}
    ) {
      edges {
        node {
          path
          component
        }
      }
    }
  }
`;
