import React from 'react';
import {storiesOf} from '@storybook/react';

import H2 from 'components/h2';

storiesOf('Typography', module).addWithInfo('H2', 'A secondary title', () => {
  return <H2>Hello World</H2>;
});
