import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.header`
  width: 100%;
  height: 56px;
  background-color: #374561;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const StyledLogo = styled.a`
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: block;
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

export default function GlobalNavigation({props}) {
  return (
    <StyledNav>
      <Inner>
        <StyledLogo>Kalo Design System</StyledLogo>
        <StyledSearch />
      </Inner>
    </StyledNav>
  );
}
