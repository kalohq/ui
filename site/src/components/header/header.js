import React from 'react';
import styled from 'react-emotion';

import Link from 'gatsby-link';

const StyledBar = styled.div`
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

const StyledNavItem = styled.div`
  border-bottom: 2px solid transparent;
  padding: 16px 8px 0;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  margin-top: 3px;

  &:hover {
    border-bottom-color: ${props => props.theme.colors.white};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.white};
  }
`;

const NavItem = ({children, link, href}) => (
  <StyledNavItem>
    {href ? <a href={href}>{children}</a> : <Link to={link}>{children}</Link>}
  </StyledNavItem>
);

export default function GlobalNavigation({projectMeta}) {
  const {title, version, sketchKitLink, githubRepoLink} = projectMeta;
  return (
    <StyledBar>
      <Inner>
        <StyledLogo>
          <Link to="/">
            {title} ({version})
          </Link>
        </StyledLogo>
        <StyledNav>
          <NavItem href={sketchKitLink}>Sketch Kit</NavItem>
          <NavItem href={githubRepoLink}>GitHub Repo</NavItem>
        </StyledNav>
      </Inner>
    </StyledBar>
  );
}
