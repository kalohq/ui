/* eslint-env jest */
import * as React from 'react';
import {mount} from 'utils/test/enzyme';

import {Tabs, Tab} from '../';

describe('Tabs', () => {
  const create = props => (
    <Tabs {...props}>
      <Tab>Profile</Tab>
      <Tab>Messages</Tab>
      <Tab>Notes &amp; Documents</Tab>
    </Tabs>
  );

  it('should render a set of three tabs', () => {
    const element = create();

    const result = mount(element);
    expect(result.exists()).toBe(true);
    expect(result.find(Tab).length).toBe(3);
  });
});
