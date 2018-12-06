import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';

const StyledDocumentationContent = styled.article`
  p,
  li,
  ol {
    color: ${props => props.theme.colors.navy900};
    font-size: 1.5rem;
    line-height: 2.4rem;
  }

  li {
    padding: 8px 0;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: #302c50;
    margin: 0 0 16px 0;
    padding: 0;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy900};
    margin-top: 40px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.colors.navy900};
  }

  p > code {
    background-color: ${props => props.theme.colors.grey100};
    font-size: 14px;
    padding: 4px;
    border-radius: 4px;
  }

  table {
    width: 100%;
    position: relative;
    border-radius: ${props => props.theme.layout.borderRadius};
    border: ${props => props.theme.colors.navy900};

    th {
      border-bottom: 2px solid ${props => props.theme.colors.grey100};
      padding: 8px;
      font-size: 14px;
      font-weight: 500;
      color: ${props => props.theme.colors.navy800};
      text-align: left;
    }

    td {
      border-bottom: 1px solid ${props => props.theme.colors.grey100};
      padding: 12px 8px;
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme.colors.navy800};

      pre {
        font-weight: 400;
        background-color: ${props => props.theme.colors.grey100};
        display: inline;
        font-size: 12px;
        padding: 4px 6px;
      }
    }
  }

  code {
    font-weight: 400;
    background-color: ${props => props.theme.colors.grey000};
    display: inline;
    font-size: 12px;
    padding: 4px 6px;
  }
`;

const DocumentationContent = ({
  children,
  raw,
  pageTitle,
  pageDescription,
  ...otherProps
}) => (
  <div style={{paddingTop: 62, width: '100%'}} {...otherProps}>
    <Helmet
      title={
        pageTitle ? `${pageTitle} - Kalo Design System` : 'Kalo Design System'
      }
    >
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
