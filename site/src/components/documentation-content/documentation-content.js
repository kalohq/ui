import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

const StyledDocumentationContent = styled.article`
  p,
  li {
    font-size: 16px;
    line-height: 1.6em;
    color: #546789;
  }
  p {
    margin-bottom: 1em;
  }

  h1 {
    font-size: 32px;
    font-weight: 400;
    color: ${props => props.theme.colors.navy700};
    margin: 0 0 16px 0;
    padding: 0;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy700};
    margin-top: 40px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy700};
  }
`;

const DocumentationContent = ({children, raw, pageTitle, pageDescription}) => (
  <div>
    <Helmet title={`${pageTitle} - Kalo Design System`}>
      <meta name="description" content={pageDescription} />
    </Helmet>
    {raw ? (
      <StyledDocumentationContent dangerouslySetInnerHTML={{__html: raw}} />
    ) : (
      <StyledDocumentationContent>{children}</StyledDocumentationContent>
    )}
  </div>
);

export default DocumentationContent;
