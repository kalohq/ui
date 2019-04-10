import React from 'react';
import styled from 'react-emotion';

import Link from 'gatsby-link';

const StyledBar = styled.div`
  width: 100%;
  height: 58px;
  background: ${props => props.theme.gradients.gradientBlueTwo};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const StyledLogo = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;

  a {
    color: inherit;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  a + a {
    margin-left: 1.6rem;
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

const NavItem = ({children, link, href, download}) => (
  <StyledNavItem>
    {href ? (
      <a href={href} download={download}>
        {children}
      </a>
    ) : (
      <Link to={link}>{children}</Link>
    )}
  </StyledNavItem>
);

const BrandLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    style={{marginRight: 16}}
    viewBox="0 0 282 114"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M164,110.648363 L164,-2.84217094e-14 L185.743579,-2.84217094e-14 L185.743579,110.648363 L164,110.648363 Z M81.9218648,110.734471 L53.1499676,110.734471 L26.1644723,75.2581084 L21.7435787,79.2190614 L21.7435787,110.648363 L0,110.648363 L0,7.10542736e-15 L21.7435787,5.6039959e-12 L21.7435787,51.5784976 L51.8778329,25.9097995 L81.5609756,25.9097995 L42.1428448,61.0417311 L81.9218648,110.734471 Z M133.164512,75.0420916 C133.164512,75.0420916 133.796068,73.0616151 133.796068,69.4450927 C133.796068,65.9060673 133.164512,63.9342015 133.164512,63.9342015 C130.557087,54.9790033 121.886722,48.2626046 112.684045,48.2626046 C101.234833,48.2626046 91.8517121,57.7258381 91.8517121,69.4450927 C91.8517121,81.1557366 101.234833,90.7050778 112.684045,90.7050778 C122.076189,90.7050778 130.557087,84.1695052 133.164512,75.0420916 Z M134.878736,25.2718552 L156.631336,25.2718552 L156.631336,110.690669 L134.878736,110.690669 L134.878736,106.299178 C128.030862,111.112597 120.26272,113.695827 112.684045,113.695827 C88.4142418,113.695827 68.7457764,93.8135649 68.7457764,69.4450927 C68.7457764,45.0766206 88.4142418,25.2718552 112.684045,25.2718552 C120.18152,25.2718552 127.841395,27.8550855 134.878736,32.6771153 L134.878736,25.2718552 Z M235.120048,92.1775191 C248.202284,92.1775191 258.848518,82.0168134 258.848518,69.4450927 C258.848518,56.9594798 248.202284,46.7987741 235.120048,46.7987741 C221.947589,46.7987741 211.301356,56.9594798 211.301356,69.4450927 C211.301356,82.0168134 221.947589,92.1775191 235.120048,92.1775191 Z M235.120048,25.2718552 C260.652964,25.2718552 281.404097,45.0766206 281.404097,69.4450927 C281.404097,93.8135649 260.652964,113.704438 235.120048,113.704438 C209.587132,113.704438 188.745776,93.8135649 188.745776,69.4450927 C188.745776,45.0766206 209.587132,25.2718552 235.120048,25.2718552 Z"
    />
  </svg>
);

export default function GlobalNavigation({projectMeta}) {
  const {
    title,
    version,
    githubRepoLink,
    buildPreviewPullRequestId: pr,
    buildPreviewCommitRef: commit,
  } = projectMeta;
  return (
    <StyledBar>
      <Inner>
        <StyledLogo>
          <Link to="/">
            <BrandLogo />
            {title} ({version})
          </Link>
          {pr && <a href={`${githubRepoLink}/pull/${pr}`}>PR: {pr}</a>}
          {pr && commit && (
            <a href={`${githubRepoLink}/commit/${commit}`}>Commit: {commit}</a>
          )}
        </StyledLogo>
        <StyledNav>
          <NavItem href={githubRepoLink}>GitHub Repo</NavItem>
        </StyledNav>
      </Inner>
    </StyledBar>
  );
}
