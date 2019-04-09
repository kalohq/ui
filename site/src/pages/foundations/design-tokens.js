import React from 'react';
import styled from 'react-emotion';
import {isString} from 'lodash';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

import tokens from '../../../../src/design-tokens/tokens.theme.js';

const TokenColor = styled.div`
  width: 16px;
  height: 16px;
  background: ${props => props.background};
  border-radius: 3px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

export default () => (
  <DocumentationContent
    pageTitle="Design Tokens"
    pageDescription="The Kalo design system is built up from design tokens. Design tokens are the very lowest level variables that together, make up larger components."
  >
    <Wrapper>
      <h1>Design tokens</h1>
      <p>
        The Kalo design system is built up from design tokens. Design tokens are
        the very lowest level variables that together, make up larger
        components.
      </p>
      <p>
        Colors, type scales, spacing units, and transitions all are examples of
        categories of design tokens.
      </p>
      <h2>Using the tokens</h2>
      <p>
        The design tokens are transformed in to several different formats,
        including css variables, JS variable, and as a theme via the Emotion
        ThemeProvider.
      </p>
      <h3>Via the ThemeProvider</h3>
      <p>
        To access tokens via the ThemeProvider, use the `theme` prop:{' '}
        <pre className="language-javascript">
          <code>props.theme.CATEGORY.TOKEN</code>
        </pre>
      </p>
      <p>
        For example:
        <pre className="language-javascript">
          <code>
            background-color: {'${props => props.theme.colors.grey500}'}
          </code>
        </pre>
      </p>
      <h3>Via CSS variables</h3>
      <p>
        If you're writing vanilla CSS in the frontend, all of the variables are
        injected in to webpack. They are available by accessing the direct token
        name:
      </p>
      <pre className="language-javascript">
        <code>background-color: var(--grey500);</code>
      </pre>
      <h2>Our current tokens</h2>
      <table>
        <tr>
          <th width="30%">Token</th>
          <th width="70%">Value</th>
        </tr>
        {Object.keys(tokens).map(tokenGroup => (
          <tbody key={tokenGroup}>
            <tr colSpan={2}>
              <td colSpan={2}>
                <strong>{tokenGroup}</strong>
              </td>
            </tr>
            {Object.keys(tokens[tokenGroup])
              .sort()
              .map(token => (
                <tr key={token}>
                  <td>
                    <pre>{token}</pre>
                  </td>
                  <td>
                    {isString(tokens[tokenGroup][token]) &&
                      (tokens[tokenGroup][token].includes('#') ||
                        tokens[tokenGroup][token].includes(
                          'linear-gradient'
                        )) && (
                        <TokenColor background={tokens[tokenGroup][token]} />
                      )}
                    {tokens[tokenGroup][token]}
                  </td>
                </tr>
              ))}
          </tbody>
        ))}
      </table>
    </Wrapper>
  </DocumentationContent>
);
