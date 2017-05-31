import React from 'react';
import {storiesOf} from '@storybook/react';

import H4 from 'components/h4';

storiesOf(
  'Typography',
  module,
).addWithInfo('H4', 'A lower weighted heading', () => {
  return <H4>Project Documents & Notes</H4>;
});
