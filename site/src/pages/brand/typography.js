import React from 'react';
import styled from 'react-emotion';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

const TypographyTable = styled.table`
  p {
    margin-bottom: 0;
  }
`;
const BrandTypographyPage = () => (
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

      <TypographyTable>
        <tr>
          <th>Scale</th>
          <th>Used for</th>
        </tr>
        <tr>
          <td>
            <span className="heading--800">Heading800</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="heading--700">Heading700</span>
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <span className="heading--600">Heading600</span>
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <span className="heading--500">Heading500</span>
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <span className="heading--400">Heading400</span>
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <p>Body</p>
          </td>
          <td />
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

export default BrandTypographyPage;
