import React from 'react';

import Button from './button';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

/** The default style. Unless the action you're building is primary, this is the button you should use. */
export function TertiaryButton() {
  return <Button theme="tertiary">Export Freelancers</Button>;
}

/** The primary action of a view. It should be used no more than once per view. */
export function PrimaryButton() {
  return <Button theme="primary">Create Project</Button>;
}

/** An action button for deleting/removing. */
export function DeleteButton() {
  return <Button theme="delete">Remove freelancer</Button>;
}

/**
 * Buttons can be disabled by toggling the disabled state. This will prevent any user
 * interaction with the button (onClick will also be disabled).
 */
export function DisabledButton() {
  return (
    <Button theme="tertiary" disabled={true} onClick={myClickFunction}>
      Get Started
    </Button>
  );
}

/** Sometimes you want to trigger the success animation while keeping the button disabled/unclickable. */
export function DisabledSuccessButton() {
  return (
    <Button
      theme="tertiary"
      disabled={true}
      success={true}
      onClick={myClickFunction}
    >
      Get Started
    </Button>
  );
}

/** Used for supporting actions. */
export function SecondaryButton() {
  return <Button theme="secondary">Save Changes</Button>;
}

/** To provide more context to an action, an icon (see the Icon component) can be floated next the button copy. */
export function ButtonWithIcon() {
  return (
    <Button theme="tertiary" icon="file_download">
      Generate Invoice
    </Button>
  );
}

/** A button can also be used with a standalone icon */
export function ButtonWithLoneIcon() {
  return (
    <Button theme="tertiary" size="medium" icon="mode_edit" loneIcon={true} />
  );
}
