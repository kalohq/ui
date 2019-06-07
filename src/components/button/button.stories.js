import React from 'react';

import {storiesOf} from '@storybook/react';
import {
  withKnobs,
  boolean,
  select,
  text,
  number,
  object,
} from '@storybook/addon-knobs';

import {Button} from './button.react.js';
import {action} from '@storybook/addon-actions';

const stories = storiesOf('Button', module);

const variants = ['primary', 'secondary', 'tertiary', 'delete', 'flare'];
const sizes = ['small', 'medium', 'large', 'extra-large'];

stories.addDecorator(withKnobs);

stories
  .add(
    'Button with props',
    () => (
      <Button
        variant={select('variant', variants)}
        children={text('children')}
        message={text('message', 'Message displayed after loading state')}
        role={text('role', 'button')}
        disabled={boolean('disabled', false)}
        icon={text('icon')}
        loneIcon={boolean('loneIcon', false)}
        wide={boolean('wide', false)}
        sizes={select('size', sizes)}
        grouped={boolean('grouped', false)}
        spacing={boolean('spacing', false)}
        flex={boolean('flex', false)}
        active={boolean('active', false)}
        loading={boolean('loading', false)}
        success={boolean('success', false)}
        onClick={action('clicked')}
        loadedTimeout={number('loadedTimeout')}
        component={text('component')}
        name={text('name')}
        type={text('type')}
        subdued={boolean('subdued', false)}
        singleRenderChildren={text('singleRenderChildren')}
        className={text('className')}
        style={object('style')}
        theme={object('theme')}
      >
        Create project
      </Button>
    ),
    {notes: 'Something to go in the notes'}
  )
  .add('Action button', () => (
    <Button icon="add" loneIcon={true} size="extra-large" variant="action" />
  ));
