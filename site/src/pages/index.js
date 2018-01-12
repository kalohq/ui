import React from 'react';
import ActionCard from '../components/action-card';

const IndexPage = () => (
  <div>
    <h1>Kalo UI Documentation</h1>
    <p>
      Welcome to the documentation for our internal design system. This site all
      of the information that you need to know for how we build products at
      Kalo.
    </p>
    <ActionCard
      title="Color"
      description="Our brand colors"
      link="/brand/color"
    />
    <ActionCard
      title="Download logos"
      description="Our brand logos and how to use them"
      link="/brand/logos"
    />
    <ActionCard
      title="Components"
      description="React components, code snippets, and guidelines"
      link="/components/button"
    />
    <ActionCard
      title="Product Glossary"
      description="Commonly used terms and phrases used across Kalo"
      link="/product/glossary"
    />
  </div>
);

export default IndexPage;
