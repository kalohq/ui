import React from 'react';
import {storiesOf} from '@storybook/react';

import Checkbox from '../checkbox';

const myClickFunction = () => {
  window.alert('Hello from an onClick event');
};

storiesOf('Checkbox', module)
  .addWithInfo(
    'checkbox',
    'A standard checkbox. Pass a label using the prop to ensure that interaction happens on both the checkbox and the label',
    () => {
      return (
        <span>
          <Checkbox
            label="Onboarding freelancers"
            checked={true}
            onClick={myClickFunction}
          />
          <Checkbox
            label="Onboarding freelancers"
            checked={false}
            onClick={myClickFunction}
          />
        </span>
      );
    },
  )
  .addWithInfo(
    'readonly',
    'A non-interactive checkbox. Can still displayed a checked state',
    () => {
      return (
        <span>
          <Checkbox
            label="Onboarding freelancers"
            size="medium"
            checked={true}
            readonly={true}
            onClick={myClickFunction}
          />
          <Checkbox
            label="Onboarding freelancers"
            size="medium"
            checked={false}
            readonly={true}
            onClick={myClickFunction}
          />
        </span>
      );
    },
  )
  .addWithInfo(
    'disabled',
    'A disabled checkbox. Can still displayed a checked state',
    () => {
      return (
        <span>
          <Checkbox
            label="Onboarding freelancers"
            size="medium"
            checked={true}
            disabled={true}
            onClick={myClickFunction}
          />
          <Checkbox
            label="Onboarding freelancers"
            size="medium"
            checked={false}
            disabled={true}
            onClick={myClickFunction}
          />
        </span>
      );
    },
  )
  .addWithInfo(
    'sizing',
    'Checkboxes can be in two sizes. Medium and Large',
    () => {
      return (
        <span>
          <Checkbox
            label="Onboarding freelancers"
            size="medium"
            checked={false}
          />
          <Checkbox label="Freelancer invoices" size="large" checked={false} />
        </span>
      );
    },
  );
