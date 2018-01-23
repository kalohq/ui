import React from 'react';

import DocumentationContent from '../../components/documentation-content';

const MetaReleasingPage = () => (
  <DocumentationContent
    pageTitle="Releasing a new version"
    pageDescription="How to release a new version of @kalo/ui"
  >
    <h1>Releasing a new version</h1>
    <p>
      Once a new version of UI has been tested, approved, and merged in to
      master, a new version can be released.
    </p>
    <h2>Publishing @kalo/ui</h2>
    <ol>
      <li>
        First, ensure you have been added to the Kalo org on NPM. Send a message
        on the #development channel in Slack if you're not sure.
      </li>
      <li>
        Then, build a new version of UI with <code>npm run dist</code>
      </li>
      <li>
        Bump the version to the appropriate version with{' '}
        <code>npm version (patch|minor|major)</code>
      </li>
      <li>
        Then, publish the new version to NPM with <code>npm publish</code>
      </li>
    </ol>
    <h2>Publishing the documentation site</h2>
    <p>
      The documentation site is a sub-package of @kalo/ui, and hosted on
      CloudFoundry. To publish a new version of the docs site:
    </p>
    <ol>
      <li>
        Ensure you have push privelegaes to our CloudFoundry account. Send a
        message on the #development channel in Slack if you're not sure.
      </li>
      <li>
        <code>cd site && npm run deploy</code>
      </li>
    </ol>
  </DocumentationContent>
);

export default MetaReleasingPage;
