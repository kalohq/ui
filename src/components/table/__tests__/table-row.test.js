/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import TableRow from '../';

describe('<TableRow />', () => {
  it('should render children', () => {
    const result = shallow(
      <TableRow>
        <td />
      </TableRow>
    );
    const td = result.find('td');
    expect(td.length).toBe(1);
  });
});
