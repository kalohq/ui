import React from 'react';

import {storiesOf} from '@storybook/react';
import Avatar from '.';

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar src="https://randomuser.me/api/portraits/women/21.jpg" />
  ))
  .add('small', () => (
    <Avatar
      src="https://randomuser.me/api/portraits/women/21.jpg"
      size={'small'}
    />
  ))
  .add('medium', () => (
    <Avatar
      src="https://randomuser.me/api/portraits/women/21.jpg"
      size={'medium'}
    />
  ))
  .add('large', () => (
    <Avatar
      src="https://randomuser.me/api/portraits/women/21.jpg"
      size={'large'}
    />
  ))
  .add('extra-large', () => (
    <Avatar
      src="https://randomuser.me/api/portraits/women/21.jpg"
      size={'extra-large'}
    />
  ))
  .add('extra-extra-large', () => (
    <Avatar
      src="https://randomuser.me/api/portraits/women/21.jpg"
      size={'extra-extra-large'}
    />
  ));
