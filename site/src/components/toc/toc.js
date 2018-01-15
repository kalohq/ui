import React from 'react';
import styled from 'react-emotion';

const StyledToc = styled.div`
  position: sticky;
  top: 90px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul:first-of-type li:first-of-type p {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.navy600};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledTocTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.navy600};
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
`;

export default function Toc(props) {
  return (
    <StyledToc>
      <StyledTocTitle>Contents</StyledTocTitle>
      <div dangerouslySetInnerHTML={{__html: props.data}} />
      <ul>
        <li>
          <a href="#props">Props</a>
        </li>
        <li>
          <a href="#examples">Examples</a>
        </li>
      </ul>
    </StyledToc>
  );
}
