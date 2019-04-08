import React from 'react';

import ButtonDropdown from '../';
import ButtonGroup from '../../button-group';
import Button from '../../button';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

export const examples = [
  {
    title: 'Button Dropdown',
    description: 'A button like component with an integrated dropdown',
    render: () => (
      <ButtonGroup>
        <ButtonDropdown
          size="large"
          variant="tertiary"
          subdued={true}
          selectItems={[
            {
              title: 'Pending',
              onClick: myClickFunction,
            },
            {
              title: 'This is a link',
              minWidth: 225,
              component: 'a',
              componentProps: {
                href: 'http://google.com',
                target: '_blank',
              },
            },
          ]}
          checkboxProps={{
            onClick: () => {},
          }}
        />
        <ButtonDropdown
          size="large"
          variant="tertiary"
          selectItems={[
            {
              title: 'Pending',
              onClick: myClickFunction,
            },
            {
              title: 'Approved',
              onClick: myClickFunction,
            },
          ]}
        >
          Another One
        </ButtonDropdown>
        <ButtonDropdown
          size="large"
          variant="tertiary"
          selectItems={[
            {
              title: 'Pending',
              onClick: myClickFunction,
            },
            {
              title: 'Approved',
              onClick: myClickFunction,
            },
          ]}
        >
          1
        </ButtonDropdown>
        <Button size="large" variant="tertiary">
          Hello World
        </Button>
      </ButtonGroup>
    ),
  },
  {
    title: 'with a disabled button',
    description:
      'Buttons can be in disabled states. This state will also be applied to the nested checkbox',
    render: () => (
      <ButtonGroup>
        <ButtonDropdown
          size="large"
          variant="tertiary"
          disabled={true}
          checkboxProps={{
            onClick: () => {},
          }}
        />
        <ButtonDropdown
          size="large"
          variant="tertiary"
          selectItems={[
            {
              title: 'Pending',
              onClick: myClickFunction,
            },
            {
              title: 'Approved',
              onClick: myClickFunction,
              disabled: true,
            },
          ]}
        >
          Another One
        </ButtonDropdown>
        <ButtonDropdown
          size="large"
          variant="tertiary"
          selectItems={[
            {
              title: 'Pending',
              onClick: myClickFunction,
            },
            {
              title: 'Approved',
              onClick: myClickFunction,
            },
          ]}
        >
          1
        </ButtonDropdown>
      </ButtonGroup>
    ),
  },
];
