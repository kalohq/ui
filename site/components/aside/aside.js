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

export default function Aside({data}) {
  return (
    <AsideContainer>
      <Title>{data.groupTitle}</Title>
      {data ? (
        <LinkGroup>
          {data.links.map(item => {
            return (
              <LinkItem key={item.title}>
                <Link href={item.path}>{item.title}</Link>
              </LinkItem>
            );
          })}
        </LinkGroup>
      ) : null}
    </AsideContainer>
  );
}
