import React from 'react';

import Documentation from '../../layouts/documentation';
import MarkdownContent from '../../components/markdown-content';

export default function withDocumentation(options) {
  return function withContent(content) {
    const DocPage = props => {
      const currentPath = props.url.pathname;
      return (
        <Documentation
          currentPath={currentPath}
          category={options.category}
          pageTitle={options.title}
        >
          <MarkdownContent>{content}</MarkdownContent>
        </Documentation>
      );
    };

    return DocPage;
  };
}
