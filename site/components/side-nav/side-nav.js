/* @flow */
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const AsideContainer = styled.aside`
  width: auto;
  height: 100%;
  min-width: 320px;
  background-color: #f9fafc;
  min-height: 100vh;
  padding: 80px 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
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
  padding: 8px 16px 8px 0;
  font-size: 16px;
  font-weight: 400;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function SideNav({links, title}: Object) {
  return (
    <AsideContainer>
      <Title>{title}</Title>
      <LinkGroup>
        {links.map(item => {
          return (
            <LinkItem key={item.path}>
              <Link href={item.path} as={item.as}>
                <a>{item.title}</a>
              </Link>
            </LinkItem>
          );
        })}
      </LinkGroup>
    </AsideContainer>
  );
}
