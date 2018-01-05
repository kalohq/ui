import React from 'react';

import Checkbox from '../checkbox';

const myClickFunction = () => {
  //eslint-disable-next-line
  window.alert('Hello from an onClick event');
};

/** A standard checkbox. Pass a label using the prop to ensure that interaction happens on both the checkbox and the label */
export function StandardCheckbox() {
  return (
    <Checkbox
      label="Onboarding freelancers"
      checked={false}
      onClick={myClickFunction}
    />
  );
}

/** A non-interactive checkbox. Can still displayed a checked state */
export function Readonly() {
  return (
    <Checkbox
      label="Onboarding freelancers"
      size="medium"
      checked={true}
      readonly={true}
      onClick={myClickFunction}
    />
  );
}

/** A disabled checkbox. Can still displayed a checked state */
export function Disabled() {
  return (
    <Checkbox
      label="Onboarding freelancers"
      size="medium"
      checked={true}
      disabled={true}
      onClick={myClickFunction}
    />
  );
}

/** Checkboxes can be in three sizes. Small, medium, and large */
export function Sizing() {
  return (
    <span>
      <Checkbox label="Onboarding freelancers" size="small" />
      <Checkbox label="Onboarding freelancers" size="medium" />
      <Checkbox label="Freelancer invoices" size="large" />
    </span>
  );
}

/** Checkboxes can be indeterminate checked */
export function Indeterminate() {
  return (
    <Checkbox label="Freelancer invoices" size="large" indeterminate={true} />
  );
}
