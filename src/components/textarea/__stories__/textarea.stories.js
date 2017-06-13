import React from 'react';
import {storiesOf} from '@storybook/react';

import Textarea from 'components/textarea';

storiesOf(
  'Textarea',
  module,
).addWithInfo('Textarea', 'A larger text input', () => {
  return <Textarea minRows={20} theme="well" />;
});
