/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import TableBody from '../';

describe('<TableBody />', () => {
  it('should render children', () => {
    const result = shallow(
      <TableBody>
        <tr />
      </TableBody>
    );
    const tr = result.find('tr');
    expect(tr.length).toBe(1);
  });
});
