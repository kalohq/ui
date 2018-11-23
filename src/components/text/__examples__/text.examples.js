import React from 'react';

import Text from '../text';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

export const examples = [
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
          color="pink500"
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
          <Text size="large" color="pink500" weight="semi-bold">
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
  {
    title: 'with onClick',
    description:
      'If an onClick event is present, several interactive styles will be set automatically',
    render: () => {
      return <Text onClick={myClickFunction}>I have an onClick event</Text>;
    },
  },
  {
    title: 'with spacing',
    description:
      'As Text extends the layout components, all of the spacing props are available',
    render: () => {
      return (
        <div>
          <Text margin={20}>with fixed pixel margin</Text>
          <br />
          <Text margin="small">with scaled margin</Text>
          <br />
          <Text paddingLeft="medium">with scaled left padding</Text>
          <br />
          <Text paddingRight={90}>with fixed pixel right padding </Text>
        </div>
      );
    },
  },
];
