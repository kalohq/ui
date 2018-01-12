import React from 'react';
import styled from 'react-emotion';

import Link from 'gatsby-link';

const StyledBar = styled('div')`
  width: 100%;
  height: 58px;
  background-color: ${props => props.theme.colors.navy700};
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

const GitHubLogo = () => (
  <svg
    width="14px"
    height="14px"
    style={{marginRight: 8}}
    viewBox="0 0 33 33"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.608,0.455 C7.614,0.455 0.32,7.748 0.32,16.745 C0.32,23.942 4.987,30.047 11.46,32.201 C12.275,32.351 12.572,31.848 12.572,31.416 C12.572,31.03 12.558,30.005 12.55,28.646 C8.019,29.63 7.063,26.462 7.063,26.462 C6.322,24.58 5.254,24.079 5.254,24.079 C3.775,23.069 5.366,23.089 5.366,23.089 C7.001,23.204 7.861,24.768 7.861,24.768 C9.314,27.257 11.674,26.538 12.602,26.121 C12.75,25.069 13.171,24.351 13.636,23.944 C10.019,23.533 6.216,22.135 6.216,15.893 C6.216,14.115 6.851,12.66 7.893,11.522 C7.725,11.11 7.166,9.453 8.053,7.211 C8.053,7.211 9.42,6.773 12.532,8.881 C13.831,8.519 15.225,8.339 16.61,8.332 C17.994,8.339 19.387,8.519 20.688,8.881 C23.798,6.773 25.163,7.211 25.163,7.211 C26.052,9.453 25.493,11.11 25.326,11.522 C26.37,12.66 27,14.115 27,15.893 C27,22.151 23.191,23.528 19.563,23.931 C20.147,24.434 20.668,25.428 20.668,26.948 C20.668,29.125 20.648,30.882 20.648,31.416 C20.648,31.852 20.942,32.359 21.768,32.2 C28.236,30.041 32.899,23.94 32.899,16.745 C32.899,7.748 25.605,0.455 16.608,0.455"
      fill="currentColor"
    />
  </svg>
);

export default function GlobalNavigation({projectMeta}) {
  const {title, version, sketchKitLink, githubRepoLink} = projectMeta;
  return (
    <StyledBar>
      <Inner>
        <StyledLogo>
          <Link to="/">
            <a>
              {title} - v{version}
            </a>
          </Link>
        </StyledLogo>
        <StyledNav>
          <NavItem link="/product/glossary">Product</NavItem>
          <NavItem link="/brand/color">Brand</NavItem>
          <NavItem link="/components/Button">Components</NavItem>
          <NavItem href={sketchKitLink}>Sketch Kit</NavItem>
          <NavItem href={githubRepoLink}>GitHub</NavItem>
        </StyledNav>
      </Inner>
    </StyledBar>
  );
}
