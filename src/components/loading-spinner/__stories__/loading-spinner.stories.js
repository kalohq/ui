import React from 'react';
import {storiesOf} from '@kadira/storybook';

import LoadingSpinner from 'components/loading-spinner';

storiesOf('LoadingSpinner', module)
  .addWithInfo(
    'Loading Spinner',
    'A standard loading spinner',
    () => {
      return (
        <LoadingSpinner/>
      );
    }
  );
