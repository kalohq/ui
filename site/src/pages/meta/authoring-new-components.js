import React from 'react';

import DocumentationContent from '../../components/documentation-content';
import Wrapper from '../../components/wrapper';

const MetaAuthoringNewComponentsPage = () => (
  <DocumentationContent
    pageTitle="Authoring new components"
    pageDescription="Some tips and pointers for writing new components in Kalo UI"
  >
    <Wrapper>
      <h1>Authoring new components</h1>
      <p>
        Before creating a new component in KaloUI, it should first meet the
        following criteria:
      </p>
      <ul>
        <li>
          Is it reusable? - if it's a one-off component, then it would probably
          be better off living in the frontend
        </li>
      </ul>
      <p>
        The quickest way to get started with a new component is to use the
        helper script (<code>npm run generate:component</code>). This will help
        set you up with the basic shape of a new component, which includes a
        directory with the following files:
      </p>
      <table>
        <tr>
          <th>File</th>
          <th>Purpose</th>
        </tr>
        <tr>
          <td>component-name.js</td>
          <td>The main component file</td>
        </tr>
        <tr>
          <td>index.js</td>
          <td>A minimal file exporting the component</td>
        </tr>
        <tr>
          <td>README.md</td>
          <td>
            A file component documentation. This is picked up and used in the
            docs site
          </td>
        </tr>
        <tr>
          <td>__tests__/component-name.test.js</td>
          <td>Any component tests</td>
        </tr>
        <tr>
          <td>__examples__/component-name.examples.js</td>
          <td>
            Examples of the component. These are displayed in the documentation
            on kalo.design
          </td>
        </tr>
      </table>
      <p>
        Some older components also have css files (using css modules), however
        for new components we strongly encourage using Emotion
      </p>
    </Wrapper>
  </DocumentationContent>
);

export default MetaAuthoringNewComponentsPage;
