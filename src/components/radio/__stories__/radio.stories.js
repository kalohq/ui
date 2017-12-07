/* @flow */
import React from 'react';

import Radio from 'components/radio';

const myClickFunction = () => {
  //eslint-disable-next-line
  window.alert('Hello from an onClick event');
};

export function SingleRadioButton() {
  return (
    <span>
      <Radio
        label="Turn off notifications"
        checked={true}
        onClick={myClickFunction}
      />
      <Radio
        label="Enable email notifications"
        checked={false}
        onClick={myClickFunction}
      />
    </span>
  );
}

export function DisabledRadioButton() {
  return (
    <span>
      <Radio
        label="Turn off notifications"
        checked={true}
        onClick={myClickFunction}
        disabled={true}
      />
      <Radio
        label="Enable email notifications"
        checked={false}
        onClick={myClickFunction}
        disabled={true}
      />
    </span>
  );
}

export function ReadOnlyRadioButton() {
  return (
    <span>
      <Radio
        label="Turn off notifications"
        checked={true}
        onClick={myClickFunction}
        readonly={true}
      />
      <Radio
        label="Enable email notifications"
        checked={false}
        onClick={myClickFunction}
        readonly={true}
      />
    </span>
  );
}
