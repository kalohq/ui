import React from 'react';
import {storiesOf} from '@kadira/storybook';

import StepMarks from 'components/step-marks';

var myClickFunction = function () {
  alert('Hello')
}

storiesOf('StepMarks', module)
  .addWithInfo(
    'StepMarks',
    'Provides indication of where a user is in a flow',
    () => {
      return (
        <StepMarks
          activeStep={3}
          numberOfSteps={6}
        />
      );
    }
  )
  .addWithInfo(
    'Interactive StepMarks',
    'An onClick function can also be provided to allow each mark to be used as a navigation component',
    () => {
      return (
        <StepMarks
          activeStep={2}
          numberOfSteps={4}
          onClick={myClickFunction}
          interactive={true}
        />
      );
    }
  );
