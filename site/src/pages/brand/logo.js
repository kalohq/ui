import React from 'react';

import DocumentationContent from '../../components/documentation-content';

import logoMisuse from './assets/logo-misuse.png';

const BrandLogoPage = () => (
  <DocumentationContent
    pageTitle="Brand logos"
    pageDescription="This is our brand logo. We have a couple of guidelines about how and when to use it."
  >
    <h1>Brand assets and logos</h1>
    <p>
      This is our brand logo. We have a couple of guidelines about how and when
      to use it.
    </p>
    <h2>The basics</h2>
    <p>When written in a sentence, the 'k' in Kalo should be capitalized</p>
    <img src={logoMisuse} alt="Logo misuse" />
  </DocumentationContent>
);

export default BrandLogoPage;
