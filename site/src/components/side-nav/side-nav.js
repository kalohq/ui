import * as React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import {upperFirst} from 'lodash';

const AsideContainer = styled.aside`
  width: auto;
  height: 100%;
  min-width: 320px;
  background-color: ${props => props.theme.colors.grey300};
  border-right: 1px solid ${props => props.theme.colors.grey400};
  min-height: calc(100vh - 56px);
  padding: 20px 0 0;
  position: fixed;
  left: 0;
  top: 56px;
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
  color: #374561;
  padding: 16px 32px;
  border-bottom: 1px solid ${props => props.theme.colors.grey400};
  font-size: 16px;
  font-weight: 400;

  &:first-of-type {
    border-top: 1px solid ${props => props.theme.colors.grey400};
  }

  &:hover {
    background-color: ${props => props.theme.colors.grey200};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function SideNav({links, title}) {
  return (
    <AsideContainer>
      <Title>{title}</Title>
      <LinkGroup>
        {links.map(item => {
          return (
            <LinkItem key={item.node.path}>
              <Link to={item.node.path}>
                <a>{upperFirst(item.node.path)}</a>
              </Link>
            </LinkItem>
          );
        })}
      </LinkGroup>
    </AsideContainer>
  );
}
