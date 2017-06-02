import React from 'react';
import {storiesOf} from '@storybook/react';

import H3 from 'components/h3';

storiesOf('Typography', module)
  .addWithInfo('H3', 'This is our default heading weight/size', () => {
    return <H3>Project Documents & Notes</H3>;
  })
  .addWithInfo('h3 with icon', 'A heading with a left aligned icon', () => {
    return (
      <H3 icon="lock" color="dark-grey" iconPadding={10}>
        Project Documents & Notes
      </H3>
    );
  });
