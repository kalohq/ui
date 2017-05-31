import React from 'react';
import {storiesOf} from '@storybook/react';

import Avatar from '../avatar';

storiesOf('Avatar', module)
  .addWithInfo(
    'standard',
    "Renders a standard avatar with a users initials as fallback if the image src doesn't exist.",
    () => {
      return (
        <Avatar
          record="Remy Sharp"
          size="medium"
          src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"
        />
      );
    }
  )
  .addWithInfo(
    'editable',
    'Useful to display whether an avatar is editable or not.',
    () => {
      return <Avatar record="Remy Sharp" size="large" editable={true} />;
    }
  )
  .addWithInfo(
    'confirmed',
    "Displays the listed icon to show whether a user has 'claimed' their profile",
    () => {
      return <Avatar record="Lauren Plews" confirmed={true} />;
    }
  )
  .addWithInfo(
    'with subrecord',
    'Avatars can be nested to display a secondary avatar (for example, a company)',
    () => {
      return (
        <Avatar
          record="Remy Sharp"
          size="large"
          src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"
          subRecord="Harry Roberts"
        />
      );
    }
  )
  .addWithInfo(
    'extra large with subrecord',
    'Avatars can be nested to display a secondary avatar (for example, a company)',
    () => {
      return (
        <Avatar
          record="Remy Sharp"
          size="x-large"
          src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"
          subRecord="Harry Roberts"
        />
      );
    }
  );
