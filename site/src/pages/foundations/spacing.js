import React from 'react';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

export default () => (
  <DocumentationContent pageTitle="Spacing">
    <Wrapper>
      <h1>Spacing</h1>
      <p>
        Our spacing system is built of multiples of 8px ( 16px, 24px, 32px,
        40px...)
      </p>
      <ul>
        <li>
          Use multiples of 8px when defining measurements, spacing, and
          positioning elements.
        </li>
        <li>When necessary use 4px to make more fine tuned adjustments.</li>
        <li>
          Whenever possible, make sure that objects line up, both vertically and
          horizontally.
        </li>
      </ul>
      <p>
        <em>
          *Our typography is based on line heights and spacing is measured from
          the edge of the text box
        </em>
      </p>
    </Wrapper>
  </DocumentationContent>
);
