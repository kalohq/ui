/* @flow */
/* eslint-env jest */
import React from 'react';
import {sheet} from 'emotion';
import {mount} from 'enzyme';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from '../../theme';

import Tag from '../tag';

expect.addSnapshotSerializer(serializer(sheet));

describe('components/tag', () => {
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <Tag {...props} />
        </ThemeProvider>
      )
      .toJSON();

  it('should shallow render as expected', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  it('should render with a remove icon if an onRemove function is passed', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Tag theme="orange" label="Front-end Engineer" onRemove={() => {}} />
      </ThemeProvider>
    );

    expect(wrapper.find('Icon').length).toBe(1);
  });
});
