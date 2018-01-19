import React from 'react';
import styled from 'react-emotion';

import DocumentationContent from '../../components/documentation-content';

import tokens from '../../../../src/design-tokens/tokens.theme.js';

const TokenColor = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${props => props.color};
  border-radius: 3px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const MetaDesignTokensPage = () => (
  <DocumentationContent
    pageTitle="Design Tokens"
    pageDescription="The Kalo design system is built up from design tokens. Design tokens are the very lowest level variables that together, make up larger components."
  >
    <h1>Design tokens</h1>
    <p>
      The Kalo design system is built up from design tokens. Design tokens are
      the very lowest level variables that together, make up larger components.
    </p>

    <p>
      Colors, type scales, spacing units, and transitions all are examples of
      categories of design tokens.
    </p>

    <h2>Our current tokens</h2>

    <table>
      <tr>
        <th width="30%">Token</th>
        <th width="70%">Value</th>
      </tr>
      {Object.keys(tokens).map(tokenGroup =>
        Object.keys(tokens[tokenGroup]).map(token => (
          <tr key={token}>
            <td>
              <pre>{token}</pre>
            </td>
            <td>
              {tokens[tokenGroup][token].includes('rgb') ? (
                <TokenColor color={tokens[tokenGroup][token]} />
              ) : null}
              {tokens[tokenGroup][token]}
            </td>
          </tr>
        ))
      )}
    </table>
  </DocumentationContent>
);

export default MetaDesignTokensPage;
