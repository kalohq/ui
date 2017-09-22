import React from 'react';
import {storiesOf} from '@storybook/react';

import Text from '../text';

const examples = [
  {
    title: 'a text node',
    description: 'A standard text node',
    render: () => {
      return (
        <Text size="large" color="blue" weight="semi-bold">
          Hello World
        </Text>
      );
    },
  },
  {
    title: 'as a link',
    description: 'The component can be overwridden to create a link',
    render: () => {
      return (
        <Text
          component="a"
          href="https://kalohq.com"
          size="large"
          color="light-red"
          weight="semi-bold"
        >
          Hello World
        </Text>
      );
    },
  },
  {
    title: 'with interactivity',
    description: 'A standard text node',
    render: () => {
      return (
        <a href="#">
          <Text size="large" color="red" weight="semi-bold">
            An interactive text node
          </Text>
        </a>
      );
    },
  },
  {
    title: 'varying font weights',
    description: '',
    render: () => {
      return (
        <div>
          <Text weight="light">light</Text>
          <br />
          <Text weight="normal">normal</Text>
          <br />
          <Text weight="medium">medium</Text>
          <br />
          <Text weight="semi-bold">semi-bold</Text>
        </div>
      );
    },
  },
];

examples.forEach(example => {
  storiesOf(
    'Typography',
    module
  ).addWithInfo(example.title, example.description, () => example.render());
});
