import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Avatar from '../avatar';

storiesOf('Avatar', module)
  .addWithInfo(
    'Standard avatar',
    "Renders a standard avatar with a users initials as fallback if the image src doesn't exist.",
    () => {
      return <Avatar record="Remy Sharp" size="medium" src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg" />;
    }
  )
  .addWithInfo(
    'with loading state',
    "With a loading spinner. Displayed if the avatar is uploading",
    () => {
      return <Avatar record="Remy Sharp" size="medium" uploading={true} />;
    }
  )
  .addWithInfo(
    'with uploaded complete state',
    "Displayed if uploading is complete",
    () => {
      return <Avatar record="Remy Sharp" size="medium" uploaded={true} />;
    }
  )
  .addWithInfo(
    'editable',
    "Useful to display whether an avatar is editable or not.",
    () => {
      return <Avatar record="Remy Sharp" size="large" editable={true} />;
    }
  )
  .addWithInfo(
    'confirmed',
    "Displays the lysted icon to show whether a user has 'claimed' their profile",
    () => {
      return <Avatar record="Lauren Plews" confirmed={true} />;
    }
  )
  .addWithInfo(
    'with subrecord',
    "Avatars can be nested to display a secondary avatar (for example, a company)",
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
  );
