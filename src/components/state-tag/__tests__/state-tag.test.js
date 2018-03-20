/* @flow */
/* eslint-env jest */
import React from 'react';
import {mount} from 'enzyme';
import serializer from 'enzyme-to-json/serializer';
import {ThemeProvider} from 'emotion-theming';

import theme from '../../theme';
import StateTag from '../state-tag';

expect.addSnapshotSerializer(serializer);

describe('components/state-tag', () => {
  it('correctly renders a tag', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StateTag leftIcon="done" theme="orange" />
      </ThemeProvider>
    );

    expect(wrapper.find('Icon').length).toBe(1);
  });

  it('correctly renders with a label', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <StateTag leftIcon="done" theme="orange" label="Invoice pending" />
      </ThemeProvider>
    );

    expect(wrapper.find('Text').text()).toBe('Invoice pending');
  });
});
