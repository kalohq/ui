import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Text from '../text';

const examples = [
  {
    title: 'a text node',
    description: 'A standard text node',
    render: () => {
      return (
        <Text
          size="large"
          color="blue"
          weight="semi-bold"
        >
          Hello World
        </Text>
      );
    },
  },
];

examples.forEach((example) => {
  storiesOf('Typography', module)
    .addWithInfo(
      example.title,
      example.description,
      () => example.render()
    );
});
