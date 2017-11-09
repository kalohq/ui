import markdown from 'markdown-in-js';

import withDocumentation from 'components/with-documentation';

export default withDocumentation({
  title: 'Product Glossary',
  category: 'product',
})(markdown`
### Back fill with product glossary
`);
