import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Textarea from 'components/textarea';

storiesOf(
  'Textarea',
  module
).addWithInfo('Textarea', 'A larger text input', () => {
  return <Textarea minRows={20} theme="well" />;
});
