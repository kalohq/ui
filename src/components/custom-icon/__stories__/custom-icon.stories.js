import React from 'react';
import {storiesOf} from '@storybook/react';

import CustomIcon from 'components/custom-icon';

storiesOf(
  'CustomIcon',
  module
).addWithInfo('An icon', 'A component to display custom icons', () => {
  return (
    <span>
      <CustomIcon size={120}>listed</CustomIcon>
      <CustomIcon size={120}>payment</CustomIcon>
      <CustomIcon size={120}>team</CustomIcon>
      <CustomIcon size={120}>invoice</CustomIcon>
      <CustomIcon size={120}>get-listed</CustomIcon>
      <CustomIcon size={120}>careers</CustomIcon>
    </span>
  );
});
