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

  table {
    width: 100%;
    position: relative;
    border-radius: ${props => props.theme.layout.borderRadius};
    border: ${props => props.theme.colors.navy700};

    th {
      border-bottom: 2px solid ${props => props.theme.colors.grey300};
      padding: 8px;
      font-size: 14px;
      font-weight: 500;
      color: ${props => props.theme.colors.navy600};
      text-align: left;
    }

    td {
      border-bottom: 1px solid ${props => props.theme.colors.navy300};
      padding: 12px 8px;
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme.colors.navy600};

      pre {
        font-weight: 400;
        background-color: ${props => props.theme.colors.grey200};
        display: inline;
        font-size: 12px;
        padding: 4px 6px;
      }
    }
  }

  code {
    font-weight: 400;
    background-color: ${props => props.theme.colors.grey200};
    display: inline;
    font-size: 12px;
    padding: 4px 6px;
  }
`;

const DocumentationContent = ({children, raw, pageTitle, pageDescription}) => (
  <div>
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
