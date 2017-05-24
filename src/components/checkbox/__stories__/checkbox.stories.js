import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Checkbox from '../checkbox';

storiesOf('Checkbox', module)
  .addWithInfo(
    'checkbox',
    "A standard checkbox. Pass a label using the prop to ensure that interaction happens on both the checkbox and the label",
    () => {
      return <Checkbox label="Onboarding freelancers" size="medium" checked={false} />;
    }
  )
  .addWithInfo(
    'readonly',
    "A non-interactive checkbox. Can still displayed a checked state",
    () => {
      return <Checkbox label="Onboarding freelancers" size="medium" checked={true} readonly={true} />;
    }
  )
  .addWithInfo(
    'sizing',
    "Checkboxes can be in two sizes. Medium and Large",
    () => {
      return (
        <span>
          <Checkbox label="Onboarding freelancers" size="medium" checked={false} />
          <Checkbox label="Freelancer invoices" size="large" checked={false} />
        </span>
      );
    }
  );
