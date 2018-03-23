import React from 'react';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

const BrandTypographyPage = () => (
  <DocumentationContent pageTitle="Typography">
    <Wrapper>
      <h1>Typography</h1>
      <p>
        Our primary typeface is Fakt Soft Pro. This is used everywhere, from
        marketing materials to the platform itself.
      </p>

      <h2>Font weights</h2>

      <table>
        <tr>
          <th>CSS weight</th>
          <th>Named weight</th>
        </tr>
        <tr>
          <td>300</td>
          <td>light</td>
        </tr>
        <tr>
          <td>400</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>500</td>
          <td>medium</td>
        </tr>
        <tr>
          <td>600</td>
          <td>semi-bold</td>
        </tr>
      </table>

      <h2>Font scale</h2>

      <table>
        <tr>
          <th>Scale</th>
          <th>Font size</th>
          <th>Line height (1.6)</th>
        </tr>
        <tr>
          <td>extra-extra-small</td>
          <td>10px</td>
          <td>16px</td>
        </tr>
        <tr>
          <td>extra-small</td>
          <td>12px</td>
          <td>19.2px</td>
        </tr>
        <tr>
          <td>small</td>
          <td>14px</td>
          <td>22.4px</td>
        </tr>
        <tr>
          <td>medium</td>
          <td>16px</td>
          <td>25.6px</td>
        </tr>
        <tr>
          <td>large</td>
          <td>18px</td>
          <td>28.8px</td>
        </tr>
        <tr>
          <td>extra-large</td>
          <td>24px</td>
          <td>38.4px</td>
        </tr>
        <tr>
          <td>extra-extra-large</td>
          <td>32px</td>
          <td>51.2px</td>
        </tr>
      </table>
    </Wrapper>
  </DocumentationContent>
);

export default BrandTypographyPage;
