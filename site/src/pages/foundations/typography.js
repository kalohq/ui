import React from 'react';
import styled from 'react-emotion';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

const TypographyTable = styled.table`
  p {
    margin-bottom: 0;
  }

  tr td:first-of-type {
    text-align: right;
    padding-right: 16px;
  }
`;

export default () => (
  <DocumentationContent pageTitle="Typography">
    <Wrapper>
      <h1>Typography</h1>
      <p>
        In our applications, we use a sans-serif system font stack. This means
        that we have no single typeface, but rather use the default sans-serif
        font that is installed on a users device. These are the fonts that are
        typically rendered per device:
      </p>

      <TypographyTable>
        <tr>
          <th>Platform/Device</th>
          <th>Default font</th>
        </tr>
        <tr>
          <td>
            <p>macOS and iOS</p>
          </td>
          <td>
            <p>
              SF Pro Display (Font sizes 19px and above)<br />
              SF Pro Text (18px and below)
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Android</p>
          </td>
          <td>
            <p>Roboto</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Windows</p>
          </td>
          <td>
            <p>Segoe UI</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Firefox OS</p>
          </td>
          <td>
            <p>Fira Sans</p>
          </td>
        </tr>
      </TypographyTable>

      <h2>Type scale</h2>

      <p>
        Our font measurements are based on the line-height of the text, spacing
        is measured from the edge of the text box.
      </p>

      <TypographyTable>
        <tr>
          <th>Scale</th>
          <th>Used for</th>
        </tr>
        <tr>
          <td align="right">
            <span className="heading--extra-large">ExtraLarge</span>
          </td>
          <td>
            <p>
              Main titles, used for things like a page title. Use only once per
              page or per modal.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <span className="heading--large">Large</span>
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <span className="heading--medium">Medium</span>
          </td>
          <td>
            <p>
              Highlight secondary titles on a page, these should be used
              sparingly.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <span className="heading--small">Small</span>
          </td>
          <td>
            <p>
              Deep headings and for highlighting important pieces of
              information.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <span className="heading--extra-small">ExtraSmall</span>
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <p>Body</p>
          </td>
          <td>
            <p>
              Use for the body copy this can we be anything from a couple of
              words to a paragraph
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <a>Link</a>
          </td>
          <td />
        </tr>
      </TypographyTable>
    </Wrapper>
  </DocumentationContent>
);
