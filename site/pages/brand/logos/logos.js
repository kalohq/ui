import markdown from 'markdown-in-js';

import withDocumentation from '../../../components/with-documentation';
import ActionCard from '../../../components/action-card';
// import assetMisuse from './assets/logo-misuse.png';

export default withDocumentation({
  title: 'Logos',
  category: 'brand',
})(markdown`
This is our brand logo. We have a couple of guidelines about how and when to use it.

<ActionCard
  title="Brand kit"
  description="Click here to download a zip file of our logos"
  link="https://github.com/kalohq/brand-kit/archive/master.zip"
/>

## The basics
When written in a sentence, the 'k' in Kalo should be capitalized.

## Misuse
![alt text](./assets/logo-misuse.png "Logo misuse")

`);
