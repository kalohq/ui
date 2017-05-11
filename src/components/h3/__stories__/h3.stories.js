import React from 'react';
import {storiesOf} from '@kadira/storybook';

import H3 from 'components/h3';

storiesOf(
  'Typography',
  module
).addWithInfo('H3', 'This is our default heading weight/size', () => {
  return <H3>Project Documents & Notes</H3>;
});
