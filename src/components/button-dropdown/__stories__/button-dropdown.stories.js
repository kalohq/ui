import React from 'react';
import {storiesOf} from '@storybook/react';

import ButtonDropdown from 'components/button-dropdown';
import ButtonGroup from 'components/button-group';
import Button from 'components/button';

const myClickFunction = () => {
  /* eslint-disable no-alert */
  window.alert('Hello from an onClick event');
  /* eslint-enable no-alert */
};

storiesOf('ButtonDropdown', module)
  .addWithInfo(
    'default',
    'A button like component with an integrated dropdown',
    () => {
      return (
        <ButtonGroup>
          <ButtonDropdown
            size="large"
            theme="tertiary"
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
            theme="tertiary"
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
            theme="tertiary"
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
          <Button size="large" theme="tertiary">
            Hello World
          </Button>
        </ButtonGroup>
      );
    }
  )
  .addWithInfo(
    'with a disabled button',
    'Buttons can be in disabled states. This state will also be applied to the nested checkbox',
    () => {
      return (
        <ButtonGroup>
          <ButtonDropdown
            size="large"
            theme="tertiary"
            disabled={true}
            checkboxProps={{
              onClick: () => {},
            }}
          />
          <ButtonDropdown
            size="large"
            theme="tertiary"
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
            theme="tertiary"
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
      );
    }
  );
