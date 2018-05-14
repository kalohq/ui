import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import {upperFirst} from 'lodash';

const MENU_WIDTH = '280px';
export const NAV_IN_FOOTER_BREAKPOINT = '1100px';

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
  @media (min-width: ${NAV_IN_FOOTER_BREAKPOINT}) {
    position: fixed;
    left: 0;
    width: ${MENU_WIDTH};
    height: 100%;
    overflow-y: auto;
    margin-top: 56px;
    padding-bottom: 70px;
    top: 0;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.navy700};
  padding: 24px 44px 4px;
  margin: 0;
  border-top: 1px solid ${props => props.theme.colors.grey300};
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
  color: ${props => props.theme.colors.navy600};
  padding: 8px 32px 8px 44px;
  font-size: 14px;
  font-weight: 400;
  background-color: ${props =>
    props.isCurrent ? props.theme.colors.grey300 : 'transparent'};

  &:hover {
    background-color: ${props => props.theme.colors.grey300};
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

export default function SideNav({links}) {
  return (
    <AsideContainer>
      <FixedContainer>
        <LinkGroup>
          {Object.keys(links).map(linkGroup => (
            <div key={linkGroup}>
              <Title>{upperFirst(linkGroup)}</Title>
              {links[linkGroup].map(item => (
                <LinkItem isCurrent={item.isCurrent} key={item.slug}>
                  <Link to={item.slug}>{item.name}</Link>
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
                  ) : null}
                </LinkItem>
              ))}
            </div>
          ))}
        </LinkGroup>
      </FixedContainer>
    </AsideContainer>
  );
}
