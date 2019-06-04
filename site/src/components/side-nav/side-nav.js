import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import {upperFirst} from 'lodash';

const MENU_WIDTH = '280px';
const TOP_NAV_HEIGHT = '58px';
export const NAV_IN_FOOTER_BREAKPOINT = '1100px';

const AsideContainer = styled.aside`
  width: auto;
  height: 100%;
  min-width: ${MENU_WIDTH};
  background-color: ${props => props.theme.colors.grey000};
  border-right: 1px solid ${props => props.theme.colors.grey100};
  min-height: calc(100vh - ${TOP_NAV_HEIGHT});
  padding: 20px 0 0;
  margin-top: ${TOP_NAV_HEIGHT};
  position: relative;
`;

const FixedContainer = styled.div`
  @media (min-width: ${NAV_IN_FOOTER_BREAKPOINT}) {
    position: fixed;
    left: 0;
    width: ${MENU_WIDTH};
    height: calc(100% - ${TOP_NAV_HEIGHT});
    overflow-y: auto;
    top: ${TOP_NAV_HEIGHT};
    padding-bottom: 70px;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.navy900};
  padding: 24px 44px 4px;
  margin: 0;
  border-top: 1px solid ${props => props.theme.colors.grey100};
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
  color: ${props => props.theme.colors.navy900};
  padding: 8px 32px 8px 44px;
  font-size: 14px;
  font-weight: 400;
  background-color: ${props =>
    props.isCurrent ? props.theme.colors.grey100 : 'transparent'};

  &:hover {
    background-color: ${props => props.theme.colors.grey100};
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
    color: ${props => props.theme.colors.navy800};

    &:hover {
      color: ${props => props.theme.colors.purple500};
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
