import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

const StyledBar = styled.header`
  width: 100%;
  height: 56px;
  background-color: #374561;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const StyledLogo = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: block;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const StyledSearch = styled.div`
  width: 250px;
  height: 30px;
  background-color: #374561;
  border-radius: 40px;
`;

const Inner = styled.div`
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 56px;

  li {
    padding: 4px 8px;

    a {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;
export default function GlobalNavigation({props}) {
  return (
    <StyledBar>
      <Inner>
        <StyledLogo>
          <Link href="/">
            <a>Kalo Design System</a>
          </Link>
        </StyledLogo>
        <StyledNav>
          <li>
            <Link href="/product/glossary">
              <a>Product</a>
            </Link>
          </li>
          <li>
            <Link href="/brand/color">
              <a>Brand</a>
            </Link>
          </li>
          <li>
            <Link href="/components/button">
              <a>Components</a>
            </Link>
          </li>
        </StyledNav>
      </Inner>
    </StyledBar>
  );
}
