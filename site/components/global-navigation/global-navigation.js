import React from 'react';
import styled from 'react-emotion';

import Link from 'next/link';

const StyledBar = styled('div')`
  width: 100%;
  height: 58px;
  background-color: ${props => props.theme.colors.pink500};
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

const Inner = styled.div`
  width: 100%;
  padding: 0 36px;
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
    padding: 6px 8px;

    a {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;

export default function GlobalNavigation() {
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
