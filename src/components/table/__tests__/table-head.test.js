/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import TableHead from '../table-head';

describe('<TableHead />', () => {
  it('should render children', () => {
    const result = shallow(
      <TableHead>
        <tr />
      </TableHead>
    );
    const tr = result.find('tr');
    expect(tr.length).toBe(1);
  });
});
