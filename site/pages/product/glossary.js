import markdown from 'markdown-in-js';

import withDocumentation from 'components/with-documentation';

export default withDocumentation({
  title: 'Product Glossary',
  category: 'product',
})(markdown`
### Category
Categories are used to segment and group freelancers. For example, a team user may wish to create a category of all their approved freelancers that are based in London. Categories are visible to the whole team, however not to the freelancer.

### Core attribute
A general quality that a team can use to rate a freelancer against, for example ‘culture fit’. See also: Feedback’.

### Finance approver
A team user with extended permissions, mainly surrounding the approval of invoices.

### Freelancer
An individual account representing either an individual freelancer, or entity (an agency for example). Freelancers have access to a separate app, and can be listed in multiple teams.

### Freelancer approver
A team user with extended permissions, with the ability to approve or unapprove freelancers.

`);
