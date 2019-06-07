import React from 'react';

import {storiesOf} from '@storybook/react';
import Alert from './alert.react';
import {withKnobs, select, text} from '@storybook/addon-knobs';

const stories = storiesOf('Alert', module);
const types = ['info', 'warning', 'error', 'confirmation'];
const titles = ['Information Alert', 'Warning', 'Error', 'Confirmation'];
stories.addDecorator(withKnobs);

stories
  .add('Default alert with no props', () => <Alert />)
  .add('Alert with props', () => (
    <Alert type={select('type', types)} title={select('title', titles)} />
  ))
  .add('Info Alert with text', () => (
    <Alert
      type={text('type', 'info')}
      title={text('title', 'Information Alert')}
    >
      You can now set your teams timezone in the Kalo Team Admin
    </Alert>
  ));
