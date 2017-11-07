/* @flow */
import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const AsideContainer = styled.aside`
  width: auto;
  max-width: 400px;
  background-color: #f9fafc;
  height: 100vh;
  padding-top: 80px;
`;

const Title = styled.h1`
  color: red;
  font-size: 26px;
`;

const LinkGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function Aside(props: {children: React$Node}) {
  return (
    <AsideContainer>
      <Title>Components</Title>
      <LinkGroup>
        <Link>What</Link>
      </LinkGroup>
    </AsideContainer>
  );
}
