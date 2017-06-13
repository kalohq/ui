import React from 'react';
import {storiesOf} from '@storybook/react';

import LoadingSpinner from 'components/loading-spinner';

storiesOf(
  'LoadingSpinner',
  module,
).addWithInfo('Loading Spinner', 'A standard loading spinner', () => {
  return <LoadingSpinner />;
});
