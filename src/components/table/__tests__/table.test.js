/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import Table from '../';

describe('<Table />', () => {
  it('should render children', () => {
    const result = shallow(
      <Table>
        <tbody />
      </Table>
    );
    const tbody = result.find('tbody');
    expect(tbody.length).toBe(1);
  });
});
