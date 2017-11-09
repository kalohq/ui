import markdown from 'markdown-in-js';

import withDocumentation from 'components/with-documentation';

export default withDocumentation({
  title: 'About',
  category: 'meta',
})(markdown`
## About page
Lorem ipsum
`);
