import React from 'react';

import ButtonGroup from '../button-group';
import Button from '../../button';
import Checkbox from '../../checkbox';

export const examples = [
  {
    title: 'Button Group',
    description:
      'A wrapping component to manage spacing and border radius between child buttons',
    render: () => (
      <ButtonGroup>
        <Button theme="tertiary" subdued={true}>
          <Checkbox />
        </Button>
        <Button theme="tertiary">Freelancers</Button>
        <Button theme="tertiary">Tasks</Button>
      </ButtonGroup>
    ),
  },
  {
    title: 'In reversed order',
    description: 'Child buttons can have their order reversed',
    render: () => (
      <ButtonGroup reverse={true}>
        <Button theme="tertiary" subdued={true}>
          <Checkbox />
        </Button>
        <Button theme="tertiary">Freelancers</Button>
        <Button theme="tertiary">Tasks</Button>
      </ButtonGroup>
    ),
  },
];
