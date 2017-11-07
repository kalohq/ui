/* @flow */
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const AsideContainer = styled.aside`
  width: auto;
  min-width: 320px;
  background-color: #f9fafc;
  height: 100vh;
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
  padding: 4px 16px;
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
      <Title>Components</Title>
      <LinkGroup>
        {data.map(item => {
          return (
            <LinkItem>
              <Link href={item.link}>{item.title}</Link>
            </LinkItem>
          );
        })}
      </LinkGroup>
    </AsideContainer>
  );
}
