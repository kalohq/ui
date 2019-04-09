import React from 'react';

import ButtonGroup from '../';
import Button from '../../button';
import Checkbox from '../../checkbox';

export const examples = [
  {
    title: 'Button Group',
    description:
      'A wrapping component to manage spacing and border radius between child buttons',
    render: () => (
      <ButtonGroup>
        <Button variant="tertiary" subdued={true}>
          <Checkbox />
        </Button>
        <Button variant="tertiary">Freelancers</Button>
        <Button variant="tertiary">Tasks</Button>
      </ButtonGroup>
    ),
    html: () => (
      <div className="ui-btn-group">
        <button className="ui-btn ui-btn--tertiary ui-btn--large">
          Freelancers
        </button>
        <button className="ui-btn ui-btn--tertiary ui-btn--large">Tasks</button>
      </div>
    ),
  },
  {
    title: 'In reversed order',
    description: 'Child buttons can have their order reversed',
    render: () => (
      <ButtonGroup reverse={true}>
        <Button variant="tertiary" subdued={true}>
          <Checkbox />
        </Button>
        <Button variant="tertiary">Freelancers</Button>
        <Button variant="tertiary">Tasks</Button>
      </ButtonGroup>
    ),
  },
  {
    title: 'Alignment',
    description:
      'Buttons can be aligned left, center, or right. Most button groups should be aligned right',
    render: () => (
      <ButtonGroup spacing={true} align="right">
        <Button variant="tertiary">Cancel</Button>
        <Button variant="primary">Create Project</Button>
      </ButtonGroup>
    ),
  },
];
