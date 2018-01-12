import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import {upperFirst} from 'lodash';

const MENU_WIDTH = '280px';

const AsideContainer = styled.aside`
  width: auto;
  height: 100%;
  min-width: ${MENU_WIDTH};
  background-color: ${props => props.theme.colors.grey200};
  border-right: 1px solid ${props => props.theme.colors.grey300};
  min-height: calc(100vh - 56px);
  padding: 20px 0 0;
  margin-top: 56px;
  position: relative;
`;

const FixedContainer = styled.div`
  position: fixed;
  left: 0;
  width: ${MENU_WIDTH};
  height: 100%;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  padding-left: 32px;
`;

const LinkGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #374561;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid ${props => props.theme.colors.grey300};

  &:first-of-type {
    border-top: 1px solid ${props => props.theme.colors.grey300};
  }

  &:hover {
    background-color: ${props => props.theme.colors.grey200};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    padding: 4px 0;
  }

  span > ul,
  span + ul {
    padding-left: 8px;
  }

  span ul > li > p,
  span ul > li > a {
    display: none;
  }

  ul li a {
    color: ${props => props.theme.colors.navy600};

    &:hover {
      color: ${props => props.theme.colors.blue500};
    }
  }

  span ul > li ul > * > * {
    display: block !important;
  }
`;

const StyledLinkItemToc = styled.div`
  width: 100%;
  font-size: 14px;
`;

export default function SideNav({links, title}) {
  return (
    <AsideContainer>
      <FixedContainer>
        <Title>{title}</Title>
        <LinkGroup>
          {links.map(item => {
            const pagePath = item.slug;
            const pageName = upperFirst(
              item.slug
                .replace(/\/(product|components|brand)\//, '')
                .replace(/\//, '')
            );
            return (
              <LinkItem key={pagePath}>
                <Link to={pagePath}>{pageName}</Link>
                {item.isCurrent && item.toc ? (
                  <StyledLinkItemToc>
                    <span dangerouslySetInnerHTML={{__html: item.toc}} />
                    <ul>
                      <li>
                        <a href="#props">Props</a>
                      </li>
                      <li>
                        <a href="#examples">Examples</a>
                      </li>
                    </ul>
                  </StyledLinkItemToc>
                ) : (
                  false
                )}
              </LinkItem>
            );
          })}
        </LinkGroup>
      </FixedContainer>
    </AsideContainer>
  );
}
